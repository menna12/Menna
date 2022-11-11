import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Doing from './components/Doing';
import Done from './components/Done';
import AddNewTodo from './components/AddNewTodo';
import { useState } from 'react';
function App() {
  const todos = [{id: 1, name: 'Pray'},
 {id: 2, name: 'Eat'},
 {id: 3, name: 'Study'},
 {id: 4, name: 'Work'},
 {id: 5, name: 'Rest'}
];
  const [selectedDoingData, setSelectedDoingData] = useState(todos);
  const chnageStateHandler = (selectedItem) => {
    setSelectedDoingData(prevState =>{
      return [...prevState, {...selectedItem}]
    });
    removeDoneItems(selectedItem);
  }

  const removeDoneItems = (selectedItem) => {
    const result = selectedDoingData.find(data => data.item === selectedItem.item);
    if (result) {
      setSelectedDoingData(prevState => {
        const newFilterd = [...prevState.filter(data => data.item !== selectedItem.item)];
        return [...newFilterd, {...selectedItem}];
      });
    }
  }

  const addNewTodoHandler = newTodo => {
    setSelectedDoingData(prevData => {
      const updatedData = [...prevData];
      updatedData.unshift({id: Math.random(), name: newTodo});
      return updatedData;
    })
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <AddNewTodo onAddNewTodo = {addNewTodoHandler}/>
      <TodoList onChangeStatus={chnageStateHandler} todos={selectedDoingData}/>
      <Doing item = {selectedDoingData}/>
      <Done item = {selectedDoingData}/>
      </header>
    </div>
  );
}

export default App;
