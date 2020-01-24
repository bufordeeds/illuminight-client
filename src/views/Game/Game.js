import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TilesContainer } from '../../containers/Tiles';
import './game.css';

export class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			gameComplete: false,
			playAgain: false,
			litEhStateArr: [...Array(5)].map((a) => [...Array(5)].map((n) => 0))
		};
	}

	incrementClicks = () => {
		this.setState((previousState) => {
			return {
				clicks: previousState.clicks + 1
			};
		});
	};

	gameComplete = () => {
		this.setState({ gameComplete: true });
	};

	playAgain = () => {
		let allDark = [...Array(5)].map((a) => [...Array(5)].map((n) => 0));
		this.setState({
			clicks: 0,
			playAgain: true,
			litEhStateArr: allDark
		});
		this.props.playAgain();
	};

	render() {
		return (
			<div className={'game-container'}>
				<TilesContainer
					cols={this.props.cols}
					rows={this.props.rows}
					stopTimer={this.props.stopTimer}
					incrementClicks={this.incrementClicks}
					user={this.props.user}
					gameComplete={this.gameComplete}
					playAgain={this.state.playAgain}
					time={this.props.time}
					litEhStateArr={this.state.litEhStateArr}
				/>
				<Button onClick={this.playAgain}>Play Again</Button>
				<span className={'clicks'}>Clicks: {this.state.clicks} </span>
				<span className={'timer'}>
					Timer:
					{` ${this.props.time} s`}
				</span>
			</div>
		);
	}
}

export default Game;

// export const Game = ({ rows, cols, time, stopTimer }) => {
// 	const [clicks, setClicks] = useState(0);
// 	return (
// 		<div className={'game-container'}>
// 			<TilesContainer
// 				cols={cols}
// 				rows={rows}
// 				clicks={clicks}
// 				setClicks={setClicks}
// 				stopTimer={stopTimer}
// 			/>
// 			<span className={'clicks'}>Clicks: {clicks} </span>
// 			<span className={'timer'}>
// 				Timer:
// 				{` ${time} s`}
// 			</span>
// 		</div>
// 	);
// };
