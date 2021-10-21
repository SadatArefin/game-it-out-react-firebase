import React from 'react';

const Credits = () => {
    return (
        <section className="py-10">
            <h2 className="text-7xl text-yellow-400">Main Creators</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 text-white gap-8 px-8">
                <div className="bg-red-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Snake Game</h2>
                    <h3 className="text-xl text-blue-400">Taneli Armanto</h3>
                    <p>Nokia</p>
                </div>
                <div className="bg-green-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Space Invaders</h2>
                    <h3 className="text-xl text-blue-400">Tomohiro Nishikado</h3>
                    <p>Taito</p>
                </div>
                <div className="bg-yellow-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Dinosaur Game</h2>
                    <h3 className="text-xl text-blue-400">Sebastien Gabriel</h3>
                    <p>Google</p>
                </div>
                <div className="bg-blue-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Astro Race</h2>
                    <h3 className="text-xl text-blue-400">Ted Dabney</h3>
                    <p>Atari</p>
                </div>
                <div className="bg-pink-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Flappy Bird</h2>
                    <h3 className="text-xl text-blue-400">Dong Nguyen</h3>
                    <p>Gears</p>
                </div>
                <div className="bg-gray-900 py-5 rounded-xl">
                    <h2 className="text-3xl">The Typing of The Dead</h2>
                    <h3 className="text-xl text-blue-400">Masamitsu Shiino</h3>
                    <p>Sega</p>
                </div>
                <div className="bg-red-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Arkanoid Bounce</h2>
                    <h3 className="text-xl text-blue-400">Akira Fujita Hiroshi Tsujino</h3>
                    <p>Taito</p>
                </div>
                <div className="bg-green-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Pong</h2>
                    <h3 className="text-xl text-blue-400">Allan Alcorn</h3>
                    <p>Atari</p>
                </div>
                <div className="bg-yellow-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Pacman</h2>
                    <h3 className="text-xl text-blue-400">Toru Iwatani</h3>
                    <p>Namco</p>
                </div>
                <div className="bg-blue-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Mario</h2>
                    <h3 className="text-xl text-blue-400">Shigeru Miyamoto</h3>
                    <p>Nintendo</p>
                </div>
                <div className="bg-pink-900 py-5 rounded-xl">
                    <h2 className="text-3xl">2048</h2>
                    <h3 className="text-xl text-blue-400">Gabriele Cirulli</h3>
                    <p>On His Own</p>
                </div>
                <div className="bg-gray-900 py-5 rounded-xl">
                    <h2 className="text-3xl">Tetris</h2>
                    <h3 className="text-xl text-blue-400">Alexey Pajitnov</h3>
                    <p>The Tetris Company</p>
                </div>
                
            </div>
        </section>
    );
};

export default Credits;