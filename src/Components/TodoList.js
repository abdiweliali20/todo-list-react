import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    const handleEdit = (todo) => {
        setEditTodo(todo);
    };
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    {todo.editing ? (
                        <input
                            type='text'
                            value={todo.title}
                            className='list'
                            onChange={(e) => setTodos(todos.map((item) => (item.id === todo.id ? { ...item, title: e.target.value } : item)))}
                        />
                    ) : (
                        <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
                    )}
                    <div className="task-buttons-container">
                        {/* <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </button> */}
                        <button className='button-complete task-button' onClick={() => { handleComplete(todo); window.alert("Task completed!"); }}>
                         <FontAwesomeIcon icon={faCheckCircle} />
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};
export default TodoList;