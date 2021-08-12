import React from 'react'
import './Column.css'

const Column = () => {
	return (
		<div className="column">
			<div className="heading">Group 1</div>
				<div className="column-item">
					<p>Item 1</p>
				</div>
				<div className="column-item">
					<p>Item 2</p>
				</div>
				<div className="column-item">
					<p>Item 3</p>
				</div>	
		</div>
	)
}

export default Column
