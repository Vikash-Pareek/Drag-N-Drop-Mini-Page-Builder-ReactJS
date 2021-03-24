import React from 'react'

function Elements(props) {

    const dragStart = event => {
        const target = event.target;
        event.dataTransfer.setData("element_id", target.id);
    }

    const dragOver = event => {
        event.stopPropagation();
    }

    return (

        <div className={props.className} id={props.id} draggable={props.draggable} onDragOver={dragOver} onDragStart={dragStart}>
            {props.children}
        </div>

    )
}

export default Elements;
