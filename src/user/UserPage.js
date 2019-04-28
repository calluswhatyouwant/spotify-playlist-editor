/* @flow */

import React, { Component } from 'react';
import {
    init,
    getCurrentUserPlaylists,
    getCurrentUserProfile,
    Page,
    PlaylistSimplified,
    PrivateUser,
} from 'spotify-web-sdk';

import UserPageHeader from './UserPageHeader';
import UserPlaylistCreationPageSection from './UserPlaylistCreationPageSection';
import UserPlaylistList from './UserPlaylistList';

import './UserPage.css';

type Props = {
    history: any,
};

type State = {
    page: Page<PlaylistSimplified>,
    playlists: PlaylistSimplified[],
    user: PrivateUser,
};

class UserPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            page: {},
            playlists: [],
            user: {},
        };
    }

    componentDidMount() {
        init({ token: localStorage.getItem('token') });
        getCurrentUserPlaylists({ limit: 5 }).then(page =>
            this.setState({
                page,
                playlists: page.items,
            })
        );
        getCurrentUserProfile().then(user =>
            this.setState({
                user,
            })
        );
    }

    loadMorePlaylists = () => {
        this.state.page.getNextPage().then(nextPage =>
            this.setState(prevState => {
                const playlists = prevState.playlists.concat(nextPage.items);
                return { page: nextPage, playlists };
            })
        );
    };

    render() {
        const { playlists, page, user } = this.state;
        const userPlaylists = playlists.filter(
            playlist => playlist.owner.id === user.id
        );

        return page.items ? (
            <div className="user-page container mb-4 p-4 shadow">
                <UserPageHeader user={user} />
                <UserPlaylistCreationPageSection />
                <UserPlaylistList
                    playlists={userPlaylists}
                    handleClick={this.loadMorePlaylists}
                    hasNextPage={page.hasNext()}
                />
            </div>
        ) : null;
    }
}

export default UserPage;
