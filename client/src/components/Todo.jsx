import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions/index";

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, text));
    };

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
            {/* Display todo data if not editing */}
            <span style={{ display: editing ? 'none' : '' }}>
                {todo?.data}
            </span>

            {/* Display input field if editing */}
            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
            </form>

            {/* Delete button */}
            <span
                className="icon"
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteTodo(todo._id));
                }}
            >
                <i className="fas fa-trash" />
            </span>

            {/* Edit button */}
            <span
                className="icon"
                onClick={(e) => {
                    e.stopPropagation();
                    setEditing(true);
                }}
            >
                <i className="fas fa-pen" />
            </span>
        </li>
    );
};

export default Todo;
