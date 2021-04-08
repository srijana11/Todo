import React, {Components} from 'react'

const Form = ({input, setInput, todos, setTodos})=>{
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };
    const onFormSubmit = (event) =>{
        event.preventDefault();
    }
    return(
        <form>
            <input type="text" placeholder="Todo...." className="task-input" value={input} required onChange={onInputChange}/> 
            <button className="button-add" type="submit"> Add</button>
           
        </form>
    );
};

export default Form;