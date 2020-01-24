import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export const Home = ({ user }) => {
  return (
    <div id={"container"}>
      {/* <div id={"gif__container"}>
        <img
          src={"https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"}
          alt={'cat gif'}
        />
      </div> */}
      <div className={"text-center"}>
        <h1>{user.id ? `Welcome back to illuminight, ${user.username}` : 'Welcome to illuminight'}</h1>
        {user.id ? (
          <Link to="/game">
            <button>Start Game</button>
          </Link>
        ) : (
          <Link to="/signup">
            <button>Sign up to play</button>
          </Link>
        )}
      </div>
    </div>
  );
};
