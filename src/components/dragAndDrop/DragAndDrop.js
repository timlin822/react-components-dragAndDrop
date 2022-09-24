import {useState,useRef} from 'react';
import DragAndDropItem from './DragAndDropItem';

import COMPANIES_DATA from 'data/CompaniesData';

import './DragAndDrop.css';

const DragAndDrop=()=>{
    const [companies,setCompanies]=useState(COMPANIES_DATA);
    const dragAndDropIndex=useRef(null);
	const dragAndDropOverIndex=useRef(null);
    
    const dragStartHandler=(index)=>{
        dragAndDropIndex.current=index;
    };
    const dragEnterHandler=(index)=>{
        dragAndDropOverIndex.current=index;
    };
    const dragEndHandler=()=>{
        let _companies=[...companies];

		const dragAndDropItem=_companies.splice(dragAndDropIndex.current,1)[0]; //要移動的項目
        _companies.splice(dragAndDropOverIndex.current,0,dragAndDropItem); //重新插入排序

		dragAndDropIndex.current=null
		dragAndDropOverIndex.current=null

		setCompanies(_companies);
    };

    return (
        <div className="drag-and-drop">
            <h2 className="drag-and-drop-title">公司市值排行</h2>
            {companies.map((company,index)=>(
                <DragAndDropItem key={company.id} company={company} index={index} dragStartHandler={dragStartHandler} dragEnterHandler={dragEnterHandler} dragEndHandler={dragEndHandler} />
            ))}
        </div>
    );
}

export default DragAndDrop;