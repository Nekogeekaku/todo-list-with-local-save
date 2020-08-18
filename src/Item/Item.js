import React from 'react';

import './Item.css'
const item = (props)=>{
   return (
       <div className="Item">
        <span></span>  
        <span>{props.content}</span>  
        <button onClick={props.click} className="close">x</button>  
       </div>
   ) ;
} 

export default item;

