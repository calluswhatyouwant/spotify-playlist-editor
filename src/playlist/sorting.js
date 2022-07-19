/* @flow */

import _ from 'lodash';
import {
    init,
    getPlaylistTracks,
    reorderPlaylistTracks,
} from 'spotify-web-sdk';

const invert = "_inverted";
export const sortingAttributes = [
    { description: 'name', attribute: 'track.name' },
    { description: 'artist name', attribute: 'track.stringArtists' },
    { description: 'album name', attribute: 'track.albumName' },
    { description: 'length', attribute: 'track.durationMs' },
    { description: 'release date', attribute: 'track.album.releaseDate' },
    { description: 'popularity', attribute: 'track.popularity' },
    { description: 'addition date', attribute: 'addedAt' },
    { description: 'inverted date', attribute: 'addedAt' + invert }
];

export const sortPlaylistTracksByAttribute = async (
    playlistId: string,
    limit: number,
    attribute: string
) => {
    init({ token: localStorage.getItem('token') });

    let inverted = false;
    if (attribute.contains(invert)) {
        attribute = attribute.replace(invert, "");
        inverted = true;
    }
    let insertionOrder = await getInsertionOrder(playlistId, limit, attribute, inverted);
    return insertionOrder.reduce(async (previousPromise, current) => {
        await previousPromise;
        return moveTrackToTop(playlistId, current);
    }, Promise.resolve());
};

const getInsertionOrder = async (
    playlistId: string,
    limit: number,
    attribute: string,
    inverted: boolean
) => {
    const playlistTracks = await getPlaylistTracks(playlistId, { limit });
    const trackRefs = playlistTracks.items.map((item, index) => ({
        index,
        attribute: _.get(item, attribute),
    }));
    const sortedTrackRefs = inverted ? _.sortBy(trackRefs, 'attribute')
        : _.sortBy(trackRefs, 'attribute').reverse();
    const insertionOrder = sortedTrackRefs.map(trackRef => trackRef.index);
    return updateIndexes(insertionOrder);
};

const updateIndexes = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) array[j] += 1;
        }
    }
    return array;
};

const moveTrackToTop = (id: string, oldIndex: number) =>
    reorderPlaylistTracks(id, oldIndex, { rangeLength: 1, insertBefore: 0 });
