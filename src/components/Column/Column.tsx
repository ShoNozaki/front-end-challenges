import React, { useState } from 'react'
import './Column.css'

const data = {
	title: "Group 1",
	items: ["1", "2", "3"]
}


const Column = () => {
	const [list, setList] = useState(data)

	return (
		<div className="column">
			<div className="heading">{list.title}</div>
			{list.items.map(item => {
			  return (	
					<div draggable className="column-item">
						<p>Item {item}</p>
					</div>	
			  )
			})}
		</div>
	)
}

export default Column
