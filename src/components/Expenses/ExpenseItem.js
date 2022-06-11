import React,{useState} from "react";
function ExpenseItem(props) {
   const [title,setTitle] = useState(props.title);
   const clickHandler = () =>{
       setTitle('Updated!');
       console.log('Clicked!!!!');
   };  
   return (<div>
        <div>{props.date.toString()}</div>
        <div>
            <h2>{props.title}</h2>
            <div>{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>);
}

export default ExpenseItem;