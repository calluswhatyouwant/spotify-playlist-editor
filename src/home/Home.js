/* @flow */

import React from 'react';

import './Home.css';

const Home = () => (
    <div className="home">
        <div className="container text-center">
            <h1 className="display-1">Spotify Playlist Editor</h1>
            <h4>Sort your playlists any way you want.</h4>
            <p>
                Note this is still a work in progress, so use it with caution!
            </p>
            <SocialButton
                href={buildAuthUrl()}
                text="Connect to Spotify"
                type="spotify"
            />
            <SocialButton
                href="https://github.com/calluswhatyouwant/spotify-playlist-editor"
                text="Source code"
                type="github"
            />
        </div>
    </div>
);

type SocialButtonProps = {
    href: string,
    text: string,
    type: 'spotify' | 'github',
};

const SocialButton = ({ href, text, type }: SocialButtonProps) => (
    <a className="btn btn-lg btn-outline-light my-2 mx-1" href={href}>
        <i className={`fab fa-${type}`} /> {text}
    </a>
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
