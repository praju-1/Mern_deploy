import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  axios.defaults.withCredentials = true;


  useEffect(() => {
    axios.get('http://localhost:5000/todos/')
      .then(response => setTodos(response.data))
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  const addTodo = () => {
    axios.post('https://mern-deploy-fawn.vercel.app/todos/add', {text})
    // axios.post('http://localhost:5000/todos/add', { text })
      .then(response => {
        console.log(response.data);
        setTodos([...todos, { text, completed: false }]);
        setText('');
      })
      .catch(err => console.log(`Error: ${err}`));
  };

  return (
    <div>
      <h2>TODO App</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
