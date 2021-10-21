import React from 'react';
import { NavLink } from 'react-router-dom';

const Games = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <NavLink to="/snake">
                <div className="bg-blue-900">
                    <img src="" alt="Game 1" />
                    <h3>Snake Game</h3>
                </div>
            </NavLink>
        </div>
    );
};

export default Games;