import PropTypes from "prop-types";
import { useState } from "react";

const TodoList = ({
  todo,
  deleteTodoFn,
  toggleIsCompletedFn,
  isEditableFn,
}) => {
  // console.log(todo);
  // const [isEditable, setisEditable] = useState(false);
  const [task, setTask] = useState(todo.task);

  return (
    <div className="flex justify-center">
      {todo.isEditable ? (
        <input
          className="border-2 border-gray-500 py-1 px-2"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      ) : (
        <>
          <input type="checkbox" onClick={() => toggleIsCompletedFn(todo.id)} />
          {todo.isCompleted ? (
            <li className="line-through text-red-500">{task}</li>
          ) : (
            <li>{task}</li>
          )}
        </>
      )}
      <span
        className="cursor-pointer ml-2"
        onClick={() => deleteTodoFn(todo.id)}
        title="Delete todo"
      >
        🗑️
      </span>
      <span
        className="cursor-pointer ml-2"
        onClick={() => toggleIsCompletedFn(todo.id)}
        title="Edit todo"
      >
        {todo.isEditable ? (
          "✅"
        ) : (
          <span onClick={() => isEditableFn(todo.id)}>✏️</span>
        )}
      </span>
    </div>
  );
};

TodoList.propTypes = {
  todo: PropTypes.object,
  deleteTodoFn: PropTypes.func,
  toggleIsCompletedFn: PropTypes.func,
  isEditableFn: PropTypes.func,
};

export default TodoList;
