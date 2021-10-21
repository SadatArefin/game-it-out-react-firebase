import React from "react";
import { NavLink } from "react-router-dom";
import snakeImage from "../../Images/snake.png";
import spaceImage from "../../Images/space.png";
import dinoImage from "../../Images/dino.jpg";
import futuristicImage from "../../Images/racing.jpg";
import flappyBirdImage from "../../Images/flappy.png";
import typerImage from "../../Images/typer.png";
import arkanoidImage from "../../Images/arkanoid.jpg";
import pingPongImage from "../../Images/ping-pong.jpg";
import pacmanImage from "../../Images/pacman.webp";
import marioImage from "../../Images/mario.png";
import image2048 from "../../Images/2048.png";
import tetrisImage from "../../Images/tetris.jpg";
import "./Games.css";
const Games = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 py-3">
      {/* Snake Game */}
      <NavLink to="/snake" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={snakeImage}
            alt="Snake Game"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Snake Game
          </h3>
        </div>
      </NavLink>
      {/* Space Invaders */}
      <NavLink to="/space" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={spaceImage}
            alt="Space Invaders"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Space Invaders
          </h3>
        </div>
      </NavLink>
      {/* Dino Game */}
      <NavLink to="/dino" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img src={dinoImage} alt="Dino Game" className="w-full game-image" />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Dino Game
          </h3>
        </div>
      </NavLink>
      {/* Futuristic Racing */}
      <NavLink to="/racing" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={futuristicImage}
            alt="Futuristic Racing"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Futuristic Racing
          </h3>
        </div>
      </NavLink>
      {/* Flappy Bird */}
      <NavLink to="/flappy" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={flappyBirdImage}
            alt="Flappy Bird"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Flappy Bird
          </h3>
        </div>
      </NavLink>
      {/* Typing Master */}
      <NavLink to="/typer" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={typerImage}
            alt="Typing Master"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Typing Master
          </h3>
        </div>
      </NavLink>
      {/* Arkanoid Bounce */}
      <NavLink to="/arkanoid" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={arkanoidImage}
            alt="Arkanoid Bounce"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Arkanoid Bounce
          </h3>
        </div>
      </NavLink>
      {/* Ping Pong */}
      <NavLink to="/pingpong" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img
            src={pingPongImage}
            alt="Ping Pong"
            className="w-full game-image"
          />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Ping Pong
          </h3>
        </div>
      </NavLink>
      {/* Pacman */}
      <NavLink to="/pacman" className="game-card overflow-hidden rounded">
        <div className="border-2 border-red-500">
          <img src={pacmanImage} alt="Pacman" className="w-full game-image" />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Pacman
          </h3>
        </div>
      </NavLink>
      {/* Mario */}
      <NavLink to="/mario" className="game-card overflow-hidden">
        <div className="border-2 border-red-500">
          <img src={marioImage} alt="Mario" className="w-full game-image" />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Mario
          </h3>
        </div>
      </NavLink>
      {/* 2048 */}
      <NavLink to="/2048" className="game-card overflow-hidden">
        <div className="border-2 border-red-500">
          <img src={image2048} alt="2048" className="w-full game-image" />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            2048
          </h3>
        </div>
      </NavLink>
      {/* Tetris */}
      <NavLink to="/tetris" className="game-card overflow-hidden">
        <div className="border-2 border-red-500">
          <img src={tetrisImage} alt="tetris" className="w-full game-image" />
          <h3 className="py-5 text-3xl text-white game-caption bg-blue-900">
            Tetris
          </h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Games;
