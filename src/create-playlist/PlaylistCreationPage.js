/* @flow */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    createPlaylist,
    init,
    getCurrentUserProfile,
    PrivateUser,
    addTracksToPlaylist,
    getCurrentUserRecentlyPlayedTracks,
    getCurrentUserTopTracks,
} from 'spotify-web-sdk';

import PlaylistCreationOption from './PlaylistCreationOption';

type State = {
    redirect: boolean,
    user: PrivateUser,
};

class PlaylistCreationPage extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            redirect: false,
            user: {},
        };
    }

    componentDidMount() {
        init({ token: localStorage.getItem('token') });
        getCurrentUserProfile().then(user => {
            this.setState({ user });
        });
    }

    getRecentlyPlayedTracks = () => {
        return getCurrentUserRecentlyPlayedTracks({
            limit: 50,
        }).then(recentTracks => recentTracks.items.map(item => item.track));
    };

    getTopTracks = () => {
        return getCurrentUserTopTracks({
            limit: 50,
            time_range: 'long_term',
        }).then(tracks => tracks.items);
    };

    createPlaylist = async (type: 'top' | 'recent') => {
        const { user } = this.state;
        const tracks =
            type === 'top'
                ? await this.getTopTracks()
                : await this.getRecentlyPlayedTracks();
        const trackUris = tracks.map(track => track.uri);
        const newPlaylist = await createPlaylist(user.id, 'Testing', {
            description: "Created with calluswhatyouwant's playlist editor.",
        });
        addTracksToPlaylist(newPlaylist.id, trackUris).then(() =>
            this.setState({ redirect: true })
        );
    };

    render() {
        const { redirect } = this.state;
        const options = ['recent', 'top'].map(type => (
            <PlaylistCreationOption
                handleClick={this.createPlaylist}
                type={type}
            />
        ));

        return redirect ? (
            <Redirect to="/playlists" />
        ) : (
            <div className="playlist-page container mb-4 p-4 shadow">
                <h1 className="mb-4">Create a new playlist...</h1>
                {options}
            </div>
        );
    }
}

export default PlaylistCreationPage;
