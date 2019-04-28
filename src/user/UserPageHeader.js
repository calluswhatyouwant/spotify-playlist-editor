/* @flow */

import React from 'react';
import { PrivateUser } from 'spotify-web-sdk';

type HeaderProps = {
    user: PrivateUser,
};

const UserPageHeader = ({ user }: HeaderProps) => (
    <div class="user-page-header media p-3">
        <img
            src={user.images ? user.images[0].url : ''}
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

export default UserPageHeader;
