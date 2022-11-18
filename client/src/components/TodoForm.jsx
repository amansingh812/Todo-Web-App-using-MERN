import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions/indux";

const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch =  useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

       dispatch(addNewTodo(text)) ;

       setText(' ');
    }

    const onInputChange = (e) =>{
        // console.log(e.target.value);
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter a task..." 
            className="input"
            onChange={onInputChange}
            value={text}
            />
        </form>
    )
}

export default TodoForm;