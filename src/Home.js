import React from 'react';

import './Home.css';

const Home = () => (
    <div className="home">
        <div className="text-center">
            <h1 className="display-1">Spotify Playlist Editor</h1>
            <h4>Sort your playlists any way you want.</h4>
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
        client_id: 'SPOTIFY_CLIENT_ID',
        response_type: 'token',
        redirect_uri: 'http://localhost:3000/auth',
        scope:
            'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private',
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
