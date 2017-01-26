import React from 'react';
import './Grid.css';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Grid = ({ rows, cols, onBlockClick }) => {
	
	const rowsFinal = [];
	// create the rows
	for (let row = 0; row < rows; row++){
	  const rowFinal =[];
		// create the cols
		for(let col = 0; col < cols; col++) {
			rowFinal.push(
				<div  
					className="block"
					onClick={() => {onBlockClick(row,col)} }
					key={`block-${col}-${row}`}
					style={{backgroundColor: getRandomColor()}}
				>r{row}c{col}</div>
			)
		}

		rowsFinal.push(
			<div 
				className="row" 
				key={`row-${row}`}
				>{rowFinal}</div>
		);
	}
	return (
		<div className="grid">
			<div className="Wrinkle-grid">
				{rowsFinal}
			</div>
		</div>
	)
}

export default Grid