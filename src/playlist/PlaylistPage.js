/* @flow */

import React, { Component } from 'react';
import { init, getPlaylist, Playlist } from 'spotify-web-sdk';

import PlaylistTrackList from './PlaylistTrackList';

import sortPlaylistTracksByAttribute from './sorter';

type Props = {
    match: any,
};

type State = {
    playlistId: string,
    playlist: Playlist,
    loading: boolean,
};

class PlaylistPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            playlist: {},
            playlistId: props.match.params.id,
            loading: false,
        };
    }

    componentDidMount() {
        init({ token: localStorage.getItem('token') });
        getPlaylist(this.state.playlistId).then(playlist =>
            this.setState({ playlist })
        );
    }

    handleClick = async () => {
        const { playlist, playlistId } = this.state;
        this.setState({ loading: true });
        sortPlaylistTracksByAttribute(
            playlistId,
            playlist.totalTracks,
            'name'
        ).then(() =>
            getPlaylist(playlistId).then(playlist =>
                this.setState({ playlist, loading: false })
            )
        );
    };

    render() {
        const { playlist, loading } = this.state;
        return playlist.name ? (
            <div className="user-playlists-page container my-4 p-4 shadow">
                <h1 className="mb-4">{playlist.name}</h1>
                <button
                    className="btn btn-dark mr-2"
                    onClick={this.handleClick}
                >
                    Sort by track name
                </button>
                <PlaylistTrackList
                    loading={loading}
                    tracks={playlist.tracks.items}
                />
            </div>
        ) : null;
    }
}

export default PlaylistPage;
