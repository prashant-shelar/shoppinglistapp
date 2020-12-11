import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContainer } from './components/TodoContainer';
const App = () => {
  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default App;
