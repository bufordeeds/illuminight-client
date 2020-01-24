import React from 'react';
import { Tile } from '../../components/Tile';
import './tiles.css';

export class TilesContainer extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			cols: 0,
			rows: 0,
			clicks: 0,
			stopTimer: false,
			score: 0,
			gameComplete: false
		};
	}

	// buildStateArr = (cols, rows) => {
	// 	let builderStateArr = [];

	// 	for (let i = 0; i < rows; i++) {
	// 		builderStateArr.push([]);
	// 		for (let j = 0; j < cols; j++) {
	// 			builderStateArr[i].push(0);
	// 		}
	// 	}

	// 	this.setState({
	// 		cols: cols,
	// 		rows: rows,
	// 		litEhStateArr: builderStateArr
	// 	});
	// };

	gameComplete = () => {
		this.props.stopTimer();
		const score = +this.state.clicks * 10 + this.props.time + 11;
		this.setState({
			score: score
			// gameComplete: true
		});

		this.props.gameComplete();

		const gameObject = {
			clicks: this.state.clicks + 1,
			time: this.props.time + 1,
			score: score,
			level: 1,
			user_id: this.props.user.id,
			username: this.props.user.username
		};

		const fetchOptions = {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ game: gameObject })
		};

		fetch('http://localhost:3000/api/v1/games', fetchOptions);
	};

	toggleLit = (tileId) => {
		const rowNum = +tileId.split('')[0];
		const colNum = +tileId.split('')[1];

		const newStateOfTiles = this.props.litEhStateArr;
		newStateOfTiles[rowNum][colNum] = !newStateOfTiles[rowNum][colNum];
		newStateOfTiles[rowNum + 1] &&
			(newStateOfTiles[rowNum + 1][colNum] = !newStateOfTiles[rowNum + 1][
				colNum
			]);
		newStateOfTiles[rowNum - 1] &&
			(newStateOfTiles[rowNum - 1][colNum] = !newStateOfTiles[rowNum - 1][
				colNum
			]);
		newStateOfTiles[colNum + 1] &&
			(newStateOfTiles[rowNum][colNum + 1] = !newStateOfTiles[rowNum][
				colNum + 1
			]);
		newStateOfTiles[colNum - 1] &&
			(newStateOfTiles[rowNum][colNum - 1] = !newStateOfTiles[rowNum][
				colNum - 1
			]);

		this.setState((previousState) => {
			// setClicks(previousState.clicks + 1);
			this.props.incrementClicks();
			return {
				...this.state,
				litEhStateArr: newStateOfTiles,
				clicks: previousState.clicks + 1
			};
		});

		let countLit = this.props.litEhStateArr.flat().filter((x) => x === true)
			.length;

		if (countLit === 11) {
			this.gameComplete();
		}
	};

	componentDidMount() {
		this._isMounted = true;
		const { cols, rows } = this.props;
		// this.buildStateArr(cols, rows);
	}

	render() {
		const styles = {
			gridTemplateColumns: `repeat(${this.props.cols}, 3.6rem)`,
			gridTemplateRows: `repeat(${this.props.rows}, 3.6rem)`
		};

		// const { litEhStateArr } = this.state;
		// console.log(litEhStateArr);

		return (
			<div className={'grid'} id={'tiles__container'} style={styles}>
				{Array.from(Array(this.props.rows)).map((_tile, rowNum) => {
					return Array.from(Array(this.props.cols)).map((_tile, colNum) => {
						return (
							<Tile
								key={`${rowNum}${colNum}`}
								id={`${rowNum}${colNum}`}
								litEh={
									this.props.litEhStateArr[rowNum] &&
									this.props.litEhStateArr[rowNum][colNum]
								}
								toggleLit={this.toggleLit}
							/>
						);
					});
				})}
			</div>
		);
	}
}

/*

LitEhStateArr MATRIX

[  0  1  2  3  4
  [0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0], //1
  [0, 0, 1, 0, 0], //2
  [0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0], //4
]


*/
