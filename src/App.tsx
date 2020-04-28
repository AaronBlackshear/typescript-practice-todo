import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, value: 'Test', checked: false }
  ]);
  const [value, setValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTodos([...todos, { id: todos[todos.length - 1].id + 1, value, checked: false }])
    setValue('');
  }

  const handleChange = (id: number) => {
    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1, { ...todo, checked: !todo.checked });
    setTodos(todosCopy);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form className="new-todo-form" onSubmit={handleSubmit}>
        <label>
          <p>New Todo</p>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </label>
      </form>

      <section>
        {todos.map(todo => <Todo key={todo.id} todo={todo} handleChange={() => handleChange(todo.id)} />)}
      </section>
    </div>
  );
}

export default App;
