import React, { useRef, useState } from 'react'
import './Column.css'

const data = {
	title: "Group 1",
	items: ["1", "2", "3"]
}


const Column = () => {
	const [list, setList] = useState(data)
	const [isDragging, setIsDragging] = useState(false)

	const dragItem = useRef<number>()
	const dragEl = useRef<EventTarget>()

	const handleDragStart = (e:React.DragEvent<HTMLDivElement>, params: number) => {
		dragItem.current = params
		dragEl.current = e.target
		dragEl.current.addEventListener("dragend", handleDragEnd)
		setIsDragging(true)
	}

	const handleDragEnd =() => {
		console.log('Ending Drag')
	}

	const getStyles = (itemI: number) => {
		if(itemI === dragItem.current){
			return 'current column-item'
		}
		return "column-item"
	}

	return (
		<div className="column">
			<div className="heading">{list.title}</div>
			{list.items.map((item, itemI) => {
			  return (	
					<div 
					key={item}
					className={isDragging?getStyles(itemI):"column-item"}
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
