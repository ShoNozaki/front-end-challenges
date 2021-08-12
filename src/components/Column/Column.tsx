import React, { useRef, useState } from 'react'
import './Column.css'

const data = {
	title: "Group 1",
	items: ["1", "2", "3"]
}


const Column = () => {
	const [list, setList] = useState(data)

	const currentItem = useRef()

	const handleDragStart = (e: any) => {
		// console.log(e.target)
		currentItem.current = e.target
	}

	return (
		<div className="column">
			<div className="heading">{list.title}</div>
			{list.items.map(item => {
			  return (	
					<div 
					className="column-item"
					draggable
					onDragStart={handleDragStart} 
					>
						<p>Item {item}</p>
					</div>	
			  )
			})}
		</div>
	)
}

export default Column
