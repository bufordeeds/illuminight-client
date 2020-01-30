import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './leaderboard.css';

const columns = [
	{
		id: 'rank',
		label: 'Rank',
		minWidth: 170,
		align: 'center',
		format: (value) => value.toLocaleString()
	},
	{
		id: 'username',
		label: 'Username',
		minWidth: 100,
		align: 'center',
		format: (value) => value.toLocaleString()
	},
	{
		id: 'clicks',
		label: 'Clicks',
		minWidth: 170,
		align: 'center',
		format: (value) => value.toLocaleString()
	},
	{
		id: 'time',
		label: 'Time (seconds)',
		minWidth: 170,
		align: 'center',
		format: (value) => value.toLocaleString()
	},
	{
		id: 'score',
		label: 'Score',
		minWidth: 170,
		align: 'center',
		format: (value) => value.toFixed(0)
	}
];

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

export default function StickyHeadTable() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [rows, setRows] = React.useState([]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const sortGames = (games) => {
		games.sort((a, b) => {
			return a.score - b.score;
		});
		games.forEach((game, index) => (game.rank = index + 1));
		// console.log(games);
		setRows(games);
	};

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/games')
			.then((res) => res.json())
			.then((games) => sortGames(games));
	}, []);

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{/* <TableCell>{index + 1}</TableCell> */}
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
