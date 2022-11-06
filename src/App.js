import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Doing from './components/Doing';
import Done from './components/Done';
import { useState } from 'react';
function App() {
  const [selectedDoingData, setSelectedDoingData] = useState([]);
  const [selectedDataDone, setSelectedDoneData] = useState([]);

  const chnageStateHandler = (selectedItem) => {
    if (selectedItem.status === 'Doing') {
      setSelectedDoingData(prevState =>{
        return [...prevState, {...selectedItem}]
      });
    }
    else {
      setSelectedDoneData(prevState =>{
        return [...prevState, {...selectedItem}]
      });
      removeDoneItems(selectedItem);
    }
  }

  const removeDoneItems = (selectedItem) => {
    const result = selectedDoingData.find(data => data.item === selectedItem.item);
    if (result) {
      setSelectedDoingData(prevState => {
        return [...prevState.filter(data => data.item !== selectedItem.item)];
      });
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoList onChangeStatus={chnageStateHandler}/>
      <Doing item = {selectedDoingData}/>
      <Done item = {selectedDataDone}/>
      </header>
    </div>
  );
}

export default App;
