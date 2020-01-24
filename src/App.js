import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import './App.css';

// Views
import { Home } from './views/Homepage';
import { SignIn } from './views/SignIn';
import { GameTimerWrap } from './views/Game/GameTimerWrap';
import { Nav } from './components/Nav';
import Leaderboard  from './views/Leaderboard';

function App() {
	const [rows, setRows] = useState(5);
	const [user, setUser] = useState({});
	const [cols, setCols] = useState(5);

	const changeGrid = () => {
		const newGridSize = +document.querySelector('#gridSize__input').value;

		setRows(newGridSize);
		setCols(newGridSize);
		document.querySelector('#game-modal__container').classList.remove('show');
	};

	return (
    <div className={"App"}>
      <Router>
        <Nav user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            <Home user={user} changeGrid={changeGrid} />
          </Route>
          <Route path="/signup">
            {user.id ? <Redirect to="/" /> : <SignIn setUser={setUser} />}
          </Route>
          <Route path="/game">
            <GameTimerWrap rows={rows} cols={cols} user={user}></GameTimerWrap>
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
