/* @flow */

import React, { Component } from 'react';
import { init, getPlaylist, Playlist } from 'spotify-web-sdk';

import PlaylistTrackList from './PlaylistTrackList';
import PlaylistSortDropdownMenu from './PlaylistSortDropdownMenu';

import { sortPlaylistTracksByAttribute } from './sorting';

import './PlaylistPage.css';

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

    handleClick = (attribute: string) => {
        const { playlist, playlistId } = this.state;
        this.setState({ loading: true });
        sortPlaylistTracksByAttribute(
            playlistId,
            playlist.totalTracks,
            attribute
        ).then(() =>
            getPlaylist(playlistId).then(playlist =>
                this.setState({ playlist, loading: false })
            )
        );
    };

    render() {
        const { playlist, loading } = this.state;

        return playlist.name ? (
            <div className="playlist-page container mb-4 p-4 shadow">
                <h1 className="mb-4">{playlist.name}</h1>
                <PlaylistSortDropdownMenu handleClick={this.handleClick} />
                <PlaylistTrackList
                    loading={loading}
                    tracks={playlist.tracks.items}
                />
            </div>
        ) : null;
    }
}

export default PlaylistPage;
