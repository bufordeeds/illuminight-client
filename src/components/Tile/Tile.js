import React from 'react';
import './tile.css';

export const Tile = ({ id, litEh, toggleLit }) => {

	return (
		<div
			id={id}
			className={litEh ? 'tile lit' : 'tile'}
			onClick={() => {
				toggleLit(id);
			}}
		></div>
	);
};

/*

MATRIX

[  c0  c1  c2  c3  c4
  [00, 01, 02, 03, 04], //r0
  [10, 11, 12, 13, 14], //r1
  [20, 21, 22, 23, 24], //r2
  [30, 31, 32, 33, 34], //r3
  [40, 41, 42, 43, 44], //r4
]


*/
