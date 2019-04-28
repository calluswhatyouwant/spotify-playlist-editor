/* @flow */

import React from 'react';

type Props = {
    handleClick: ('recent' | 'top') => any,
    type: 'recent' | 'top',
};

const PlaylistCreationOption = ({ handleClick, type }: Props) => (
    <div>
        <h3>With your {type} tracks</h3>
        <div className="center-wrapper">
            <button
                className="btn btn-dark btn-purple px-4"
                onClick={() => handleClick(type)}
            >
                <h4 className="mb-0">CREATE PLAYLIST</h4>
            </button>
        </div>
        <hr className="my-4" />
    </div>
);

export default PlaylistCreationOption;
