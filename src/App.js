import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import createToDo from "./components/create-todo.component";
import editToDo from "./components/edit-todo.component";
import TodoList from "./components/todos-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <h2> MERN-Stack Todo App</h2>

      </div>
      <Route path="/" exact component={TodoList}/>
      <Route path="/edit/:id" component={editToDo}/>
      <Route path="/create" component={createToDo}/>


    </Router>
  );
}

export default App;
