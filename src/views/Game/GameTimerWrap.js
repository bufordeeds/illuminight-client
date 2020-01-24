import { Game } from './Game';
import React, { Component } from 'react';
let startTimer;

export class GameTimerWrap extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			stopTimer: false
		};
	}

	setTimer = () => {
		startTimer = setInterval(() => {
			this.setState((previousState) => {
				// console.log(this.state.time);
				return { time: previousState.time + 1 };
			});
		}, 1000);
	};

	clearTimer = () => {
		clearInterval(startTimer);
	};

	stopTimer = () => {
		this.clearTimer();
	};

	setTimerAgain = () => {
		this.clearTimer();
		this.setState({ time: 0 });
		this.setTimer();
	};

	componentDidMount() {
		this._isMounted = true;
		this.setTimer();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<Game
				rows={this.props.rows}
				cols={this.props.cols}
				time={this.state.time}
				stopTimer={this.stopTimer}
				user={this.props.user}
				playAgain={this.setTimerAgain}
			></Game>
		);
	}
}

export default GameTimerWrap;
