import React from 'react';

import './Grid.css';

const Grid = ({ rows, cols, onBlockClick }) => {
	const rowsFinal = [];

	// create the rows
	for (let row = 0; row < rows; row++){
	  const rowFinal =[];
		
		// create the cols
		for(let col = 0; col < cols; col++) {
			rowFinal.push(
				<div  
					key={`block-${col}-${row}`} 
					className="block"
					onClick={() => { onBlockClick(row,col) }}
				/>
			)	
		}

		rowsFinal.push(
			<div className="row" key={`row-${row}`}>{rowFinal}</div>
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

export default Grid;