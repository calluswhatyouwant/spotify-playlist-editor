/* @flow */

import React from 'react';

import './Home.css';

const Home = () => (
    <div className="home">
        <div className="text-center">
            <h1 className="display-1">Spotify Playlist Editor</h1>
            <h4>Sort your playlists any way you want.</h4>
            <h5>
                <i class="fas fa-exclamation-triangle" /> Note this is still a
                work in progress, so use it with caution.{' '}
                <i class="fas fa-exclamation-triangle" />
            </h5>
            <a
                className="btn btn-lg btn-outline-light my-2"
                href={buildAuthUrl()}
            >
                Connect to Spotify
            </a>
        </div>
    </div>
);

const buildAuthUrl = () => {
    const params = {
        client_id: '77edb9a2465445fc8b366da5105e7add',
        response_type: 'token',
        redirect_uri:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000/auth'
                : 'https://calluswhatyouwant.github.io/spotify-playlist-editor/auth',
        scope: `playlist-read-private playlist-read-collaborative playlist-modify-public
            playlist-modify-private user-read-recently-played user-top-read`,
    };
    return `https://accounts.spotify.com/authorize?${encodeQueryParams(
        params
    )}`;
};

const encodeQueryParams = params =>
    Object.keys(params)
        .map(
            param =>
                `${encodeURIComponent(param)}=${encodeURIComponent(
                    params[param]
                )}`
        )
        .join('&');

export default Home;
