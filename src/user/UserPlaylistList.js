/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import { PlaylistSimplified } from 'spotify-web-sdk';

import './UserPlaylistList.css';

type Props = {
    playlists: PlaylistSimplified[],
    handleClick: () => void,
    hasNextPage: boolean,
};

const UserPlaylistList = ({ playlists, handleClick, hasNextPage }: Props) => {
    const playlistListItems = playlists.map(playlist => (
        <UserPlaylistListItem playlist={playlist} />
    ));

    const loadMoreButton = (
        <div className="load-more-button-wrapper">
            <button
                className="btn btn-dark load-more-button"
                onClick={handleClick}
            >
                <h4 className="px-3 mb-0">LOAD MORE PLAYLISTS</h4>
            </button>
        </div>
    );

    return (
        <div>
            <h2 className="mb-4">These are your playlists</h2>
            {playlistListItems}
            {hasNextPage && loadMoreButton}
        </div>
    );
};

type ItemProps = {
    playlist: PlaylistSimplified,
};

const UserPlaylistListItem = ({ playlist }: ItemProps) => (
    <div className="user-playlist">
        <h4>
            {playlist.name}
            <Link
                className="badge badge-pill badge-dark mx-1"
                to={`/playlists/${playlist.id}`}
            >
                SORT / MANAGE
            </Link>
        </h4>
        <h5>
            <span className="badge badge-info mr-1">
                {playlist.totalTracks} tracks
            </span>
            <span className="badge badge-secondary">
                {playlist.collaborative
                    ? 'COLLABORATIVE'
                    : playlist.public
                    ? 'PUBLIC'
                    : 'PRIVATE'}
            </span>
        </h5>
        <hr className="my-4" />
    </div>
);

export default UserPlaylistList;
