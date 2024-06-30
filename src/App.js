import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './App.css'; // Import your app.css file
const App = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
        // You can add your localStorage logic here
    }, []);
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <Header />
                <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                />
            </div>
        </div>
    );
};
export default App;