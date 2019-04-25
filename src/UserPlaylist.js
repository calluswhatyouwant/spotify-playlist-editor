/* @flow */

import React from 'react';
import { PlaylistSimplified } from 'spotify-web-sdk';

type Props = {
    playlist: PlaylistSimplified,
};

const UserPlaylist = ({ playlist }: Props) => (
    <div className="user-playlist">
        <h4>
            {playlist.name}
            <a
                href={`/playlists/${playlist.id}`}
                className="badge badge-pill badge-dark mx-1"
            >
                SORT / MANAGE
            </a>
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

export default UserPlaylist;
