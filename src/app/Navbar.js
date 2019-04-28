/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Spotify Playlist Editor
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <NavbarContent />
    </nav>
);

const NavbarContent = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/playlists">
                    Playlists
                </Link>
            </li>
        </ul>
    </div>
);

export default Navbar;
