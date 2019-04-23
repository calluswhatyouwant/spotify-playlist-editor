/* @flow */

import React, { Component } from 'react';
import {
    init,
    getCurrentUserPlaylists,
    getCurrentUserProfile,
    Page,
    PlaylistSimplified
} from 'spotify-web-sdk';

import UserPlaylist from './UserPlaylist';

import './UserPlaylistsPage.css';

type Props = {
    history: any,
};

type State = {
    page: Page<PlaylistSimplified>,
    playlists: PlaylistSimplified[],
    userId: string,
};

class UserPlaylistsPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            page: {},
            playlists: [],
            userId: ''
        };
    }

    componentDidMount() {
        init({ token: localStorage.getItem('token') });
        getCurrentUserPlaylists({ limit: 5 })
            .then(page => this.setState({
                page, playlists: page.items
            }));
        getCurrentUserProfile()
            .then(userProfile => this.setState({
                userId: userProfile.id
            }));
    }

    loadMorePlaylists = () => {
        this.state.page.getNextPage()
            .then(nextPage => this.setState(prevState => {
                const playlists = prevState.playlists.concat(nextPage.items);
                return ({ page: nextPage, playlists });
            }));
    }

    render() {
        const { playlists, page, userId } = this.state;
        const userPlaylists = playlists
            .filter(playlist => playlist.owner.id === userId);
        const playlistListItems = userPlaylists
            .map(playlist => <UserPlaylist playlist={playlist} />);
        const loadMoreButton = (
            <div className="load-more-button-wrapper">
                <button className="btn btn-outline-dark" onClick={this.loadMorePlaylists}>
                    Load more playlists
                </button>
            </div>
        );
        
        return page.items ? (
            <div className="user-playlists-page container my-4 p-4 shadow">
                <h1 className="mb-4">
                    Your playlists
                </h1>
                    {playlistListItems}
                {page.hasNext() && loadMoreButton}
            </div>
        ) : <></>;
    }
};

export default UserPlaylistsPage;
