/* @flow */

import React from 'react';

type Props = {
    playlist: PlaylistSimplified,
};

const UserPlaylist = ({ playlist }: Props) => (
    <div className="user-playlist">
        <h4>
            {playlist.name}
            <a href="/" class="badge badge-pill badge-dark mx-1">
                SORT / MANAGE
            </a>
        </h4>
        <h5>
            <span class="badge badge-info mx-1">
                {playlist.totalTracks} tracks
            </span>
            <span class="badge badge-secondary mx-1">
                {playlist.collaborative ? 'COLLABORATIVE' : playlist.public ? 'PUBLIC' : 'PRIVATE'}
            </span>
        </h5>
        <hr className="my-4" />
    </div>
);

export default UserPlaylist;
