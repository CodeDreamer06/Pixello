import { useState } from 'react';

const GRID_SIZE = 20;
const PaintCanvas = () => {
	const [selectedColor, setSelectedColor] = useState('black');
	const [grid, setGrid] = useState(Array(GRID_SIZE).fill(Array(GRID_SIZE).fill('white')));
  
	const handleSquareClick = (rowIndex, colIndex) => {
	  const newGrid = grid.map((row, rIndex) =>
		row.map((color, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? selectedColor : color))
	  );
	  setGrid(newGrid);
	};
	return <div>
	<div className="color-picker">
	  <label>
		Select color:
		<input
		  type="color"
		  value={selectedColor}
		  onChange={(e) => setSelectedColor(e.target.value)}
		/>
	  </label>
	</div>
	<div className="grid">
	  {grid.map((row, rowIndex) => (
		<div key={rowIndex} className="row">
		  {row.map((color, colIndex) => (
			<div
			  key={colIndex}
			  className="square"
			  style={{ backgroundColor: color }}
			  onClick={() => handleSquareClick(rowIndex, colIndex)}
			/>
		  ))}
		</div>
	  ))}
	</div>
  </div>
}

export default PaintCanvas;