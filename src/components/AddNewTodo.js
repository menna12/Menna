import { useState } from 'react';

const AddNewTodo = props => {
    const [enteredValue, setTodoInput] = useState('');
    const handleEnteredTodo = event => {
        setTodoInput(event.target.value);
    }
    const handleOnTodoSubmit = event =>{
        event.preventDefault();
        props.onAddNewTodo(enteredValue);
        setTodoInput('');
    }
    return (
        <div>
            <h2>Add New Todo</h2>
            <form onSubmit={handleOnTodoSubmit}>
              <input type="text" onChange={handleEnteredTodo} value={enteredValue}/>
              <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}

export default AddNewTodo;