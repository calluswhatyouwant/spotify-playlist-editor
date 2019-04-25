/* @flow */

import React from 'react';

import { sortingAttributes } from './sorting';

type Props = {
    handleClick: (attribute: string) => void,
};

const PlaylistSortDropdownMenu = ({ handleClick }: Props) => {
    const sortingButtons = sortingAttributes.map(
        ({ attribute, description }) => (
            <button
                className="text-uppercase dropdown-item"
                onClick={() => handleClick(attribute)}
            >
                {description}
            </button>
        )
    );
    return (
        <div class="dropdown">
            <button
                class="btn btn-dark dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                SORT PLAYLIST BY
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {sortingButtons}
            </div>
        </div>
    );
};

export default PlaylistSortDropdownMenu;
