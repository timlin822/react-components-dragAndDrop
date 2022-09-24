import {FaBars} from 'react-icons/fa';

import './DragAndDrop.css';

const DragAndDropItem=({index,company,dragStartHandler,dragEnterHandler,dragEndHandler})=>{
    return (
        <div className="drag-and-drop-item" draggable onDragStart={()=>dragStartHandler(index)} onDragEnter={()=>dragEnterHandler(index)} onDragEnd={dragEndHandler} onDragOver={e=>e.preventDefault()}>
            {company.name}
            <FaBars />
        </div>
    );
}

export default DragAndDropItem;