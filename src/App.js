
import './App.css';
import React, {useState} from "react";
import Todo from "./Todo"; 

 const App = () => {
   const [inputList, setInputList] = useState("");
   const [Items,setItems] = useState([]);
    const itemEvent = (event)=>{
     setInputList(event.target.value);
    }
    const listOfItems = ()=>{
        setItems((oldItems)=>{
          return [...oldItems,inputList];

        });
        setInputList('');
    };
     const deletItem=(id)=>{
   console.log("I AM")

   setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
     return index !== id;

    })
   })
 }
  return(
      <>
        <div className="main-div">
         <div className="center-div">
            <h1>ToDo-List</h1>
            <br/>
            <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent}/>
             <button onClick={listOfItems} id="btn"> + </button>
           <ol>
          
                {
                  Items.map((itemVal,index)=>{
                 return  <Todo key={index} id={index} text={itemVal} 
                onSelect={deletItem}
                 />
                  })
                }

           </ol> 

        </div>
        </div>
      </>
    );
 };

export default App;
