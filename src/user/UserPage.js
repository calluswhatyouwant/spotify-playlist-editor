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
            <div className="user-playlists-page container my-4 p-4 shadow">
                <UserPageHeader user={user} />
                <UserPlaylistList
                    playlists={userPlaylists}
                    handleClick={this.loadMorePlaylists}
                    hasNextPage={page.hasNext()}
                />
            </div>
        ) : null;
    }
}

type HeaderProps = {
    user: PrivateUser,
};

const UserPageHeader = ({ user }: HeaderProps) => (
    <div class="user-page-header media p-3">
        <img
            src={user.images[0].url}
            alt="Avatar"
            className="user-image rounded-circle align-self-center"
        />
        <div class="media-body align-self-center">
            <h1 className="text-center py-4 display-4">
                Welcome, {user.displayName}!
            </h1>
        </div>
    </div>
);

export default UserPage;
