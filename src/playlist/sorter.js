/* @flow */

import _ from 'lodash';
import {
    init,
    getPlaylistTracks,
    reorderPlaylistTracks,
} from 'spotify-web-sdk';

const sortPlaylistTracksByAttribute = async (
    playlistId: string,
    limit: number,
    attribute: string
) => {
    init({ token: localStorage.getItem('token') });
    let insertionOrder = await getInsertionOrder(playlistId, limit, attribute);
    return insertionOrder.reduce(async (previousPromise, current) => {
        await previousPromise;
        return moveTrackToTop(playlistId, current);
    }, Promise.resolve());
};

const getInsertionOrder = async (
    playlistId: string,
    limit: number,
    attribute: string
) => {
    const playlistTracks = await getPlaylistTracks(playlistId, { limit });
    const trackRefs = playlistTracks.items.map((item, index) => ({
        playlistIndex: index,
        attribute: _.get(item.track, attribute),
    }));
    const sortedTrackRefs = _.sortBy(trackRefs, 'attribute').reverse();
    const insertionOrder = sortedTrackRefs.map(
        trackRef => trackRef.playlistIndex
    );
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

const moveTrackToTop = (id: string, indexOld: number) =>
    reorderPlaylistTracks(id, indexOld, { rangeLength: 1, insertBefore: 0 });

export default sortPlaylistTracksByAttribute;
