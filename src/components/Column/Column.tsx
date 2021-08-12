import React, { useRef, useState } from 'react'
import './Column.css'

const data = {
	title: "Group 1",
	items: ["1", "2", "3"]
}


const Column = () => {
	const [list, setList] = useState(data)

	const dragItem: any = useRef()

	const handleDragStart = (e:React.DragEvent<HTMLDivElement>, params: number) => {
		dragItem.current = params
	}

	return (
		<div className="column">
			<div className="heading">{list.title}</div>
			{list.items.map((item, itemI) => {
			  return (	
					<div 
					key={item}
					className="column-item"
					draggable
					onDragStart={(e) => {handleDragStart(e, itemI)}} 
					>
						<p>Item {item}</p>
					</div>	
			  )
			})}
		</div>
	)
}

export default Column
