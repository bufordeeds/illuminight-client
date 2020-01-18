import React, { useState } from 'react';
import './App.css';
import Tile from './components/Tile';
import TilesContainer from './containers/Tiles';

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  return (
    <div className="App">
      <TilesContainer>
        {
          Array.from(Array(25)).map((tile, idx) => <Tile key={idx} id={`tile-${idx}`} />)
        }
      </TilesContainer>
    </div>
  );
}

export default App;

/*
SINGLE_ARRAY


is this an end of row?
  idx%5 === 0
is the beginning of row?
  (idx-1)%5 === 0

cols = 5
rows = 5

is in first row?
  idx <= rows
is in last row?
  idx <= (cols * rows) && idx > ((cols * rows) - rows)

1 2 3 4 5
x x x x x
6 7 8 9 0
x x x x x
1 2 3 4 5
x x x x x
6 7 8 9 0
x x x x x
1 2 3 4 5
x x x x x

*/

/*

MATRIX

[
  [0w, 1w, 2w, 3w, 4w], //0
  [0v, 1v, 2v, 3v, 4v], //1
  [0x, 1x, 2x, 3x, 4x], //2
  [0y, 1y, 2y, 3y, 4y], //3
  [0z, 1z, 2z, 3z, 4z], //4
]


*/