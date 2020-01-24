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
        <h1>
          {user.id
            ? `Welcome back to illuminight, ${user.username}`
            : "Welcome to illuminight"}
        </h1>
        <h2>
          The rules are <em>simple</em>. The game? <em>Not so much.</em>
        </h2>

        <h3>
          Click the tiles to illuminate them. Once all of the tiles are lit you
          win the game.
        </h3>
        <h3>
          Every second that goes by is <span class="redText">a point</span>{" "}
          against you.
        </h3>
        <h3>
          And every click is <span class="redText">10 points</span> against you.
        </h3>
        <h3>Only the fastest and most efficient will top the leaderboard.</h3>
        <h3> Easy enough right?</h3>

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
