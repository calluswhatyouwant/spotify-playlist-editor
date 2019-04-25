/* @flow */

import React from 'react';
import { PlaylistTrack, TrackSimplified } from 'spotify-web-sdk';

import './PlaylistTrackList.css';

type Props = {
    loading: boolean,
    tracks: TrackSimplified[],
};

const PlaylistTrackList = ({ loading, tracks }: Props) => (
    <div>
        <h3 className="mt-3">Tracks</h3>
        <ul className="list-unstyled">
        {loading ? (
            <h4 className="text-center">
                A little bit of patience now... <i className="fas fa-circle-notch spinner" />
            </h4>
        ) : tracks.map(track => <PlaylistTrackListItem key={track.id} playlistTrack={track} />)}
        </ul>
    </div>
);

type ItemProps = {
    playlistTrack: PlaylistTrack,
};

const PlaylistTrackListItem = ({ playlistTrack }: ItemProps) => {
    const { track } = playlistTrack;
    return (
        <li className="media">
            <img className="playlist-img mr-3" src={track.album.imageUrl} alt={track.albumName} />
            <div className="media-body">
                <h5 className="mt-0 mb-1"><b>{track.name}</b></h5>
                <p>{track.stringArtists}</p>
            </div>
        </li>
    );
};

export default PlaylistTrackList;
