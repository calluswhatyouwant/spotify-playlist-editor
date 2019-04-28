/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

const UserPlaylistCreationPageSection = () => (
    <section className="mb-3">
        <h2>Create a new playlist</h2>
        <p>
            Highly recommended for testing, so that you don't overwrite your own
            playlists.
        </p>
        <div className="center-wrapper">
            <Link className="btn btn-dark btn-purple mx-1" to="/playlists/new">
                <h4 className="px-3 mb-0">CREATE A NEW PLAYLIST</h4>
            </Link>
        </div>
    </section>
);

export default UserPlaylistCreationPageSection;
