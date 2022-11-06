import React , { useState } from "react";
const TodoList = (props) => {
    const todos = [{id: 1, name: 'Pray'},
 {id: 2, name: 'Eat'},
 {id: 3, name: 'Study'},
 {id: 4, name: 'Work'},
 {id: 5, name: 'Rest'}
];

const [itemValue, setItemSelection] = useState({status:'', item: ''});
const handleRadioButtonCheck = (event) => {
    setItemSelection({
        status: event.target.value,
        item: event.target.name
    });

    props.onChangeStatus({
        status: event.target.value,
        item: event.target.name
    });
}
return (
    <div>
        <h2>TO Do</h2>
        {
            todos.map((todo) => (<div key={todo.id}>
                <p>{todo.name}</p>
                <input onChange={handleRadioButtonCheck} type="radio" value="Doing" name={todo.name} /> Doing
                <input onChange={handleRadioButtonCheck} type="radio" value="Done" name={todo.name} /> Done
               </div>))
        }
    </div>
)
}

export default TodoList;