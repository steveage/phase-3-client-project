import {useEffect, useState} from 'react';
import Home from './Home';
import TodoTemplate from './TodoTemplate';

function App() {
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);
  const url = 'http://localhost:9292';

  useEffect(fetchTodos, []);

  function fetchTodos() {
    fetch(`${url}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data));

    fetch(`${url}/categories`)
      .then(response => response.json())
      .then(data => setCategories(data));
  }

  function onDelete(id) {
    const settings = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }

    fetch(`${url}/todos/${id}`, settings);
    fetchTodos();
  }

  function todoAdded(todo) {
    const data = JSON.stringify(todo);
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data
    }

      fetch(`${url}/todos`, settings)
        .then(response => response.json())
        .then(newTodo => fetchTodos())
    }

  return (
    <div className="App">
      < TodoTemplate categories = {categories} todoAdded = {todoAdded} />
      < Home todos = {todos} onDelete = {onDelete} />
    </div>
  );
}

export default App;