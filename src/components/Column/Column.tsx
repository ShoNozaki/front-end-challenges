import React, { useRef, useState } from 'react'
import './Column.css'

const data = {
	title: "Group 1",
	items: ["1", "2", "3"]
}


const Column = () => {
	const [list, setList] = useState(data)
	const [isDragging, setIsDragging] = useState(false)

	const dragItem = useRef<number | null>(null)
	const dragEl = useRef<EventTarget | null>(null)

	const handleDragStart = (e:React.DragEvent<HTMLDivElement>, params: number) => {
		dragItem.current = params
		dragEl.current = e.target
		dragEl.current.addEventListener("dragend", handleDragEnd)
		//Prevents change of styling for dragged element
		setTimeout(()=> {
			setIsDragging(true)
		}, 0)
	}

	const handleDragEnd =() => {
		// console.log('Ending Drag')
		if(dragEl.current){
			dragEl.current.removeEventListener("dragend", handleDragEnd)
		}
		dragEl.current = null
		dragItem.current = null
		setIsDragging(false)
	}

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, itemI: number) => {
		// console.log("Entering Zone")
		if(e.target !== dragEl.current){
			// console.log("I Am Different")
			setList(oldList => {
				let newList = JSON.parse(JSON.stringify(oldList))
				newList.items.splice(itemI, 0, newList.items.splice(dragItem.current,1)[0])
				dragItem.current = itemI
				return newList
			})
		}
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
					onDragEnter={isDragging?(e)=>{handleDragEnter(e, itemI)}:undefined}
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
