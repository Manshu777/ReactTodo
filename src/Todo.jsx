import React from 'react';
const Todo = (props) =>{

 return  (
 	<>
 	<div className="dele">
 	<button onClick={()=>{
 		props.onSelect(props.id);
 	}}>X </button>
 	<li> {props.text} </li>

      </div>
     </>
 	);


};
export default Todo;