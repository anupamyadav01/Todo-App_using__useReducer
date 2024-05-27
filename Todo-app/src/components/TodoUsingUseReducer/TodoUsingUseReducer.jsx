import { useReducer, useState } from "react";
import { v4 as generatUniqueId } from "uuid";
import TodoList from "./TodoList";

const TodoUsingUseReducer = () => {
  const [todo, setTodo] = useState("");
  const generateTodo = (task) => {
    return {
      id: generatUniqueId(),
      task,
      isCompleted: false,
      isEditable: false,
      dateTime: Date.now(),
    };
  };

  const reducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, generateTodo(action.payload)],
        };
      case "REMOVE_TODO": {
        const updatedTodos = state.todos.filter((singleTodo) => {
          return singleTodo.id !== action.payload;
        });
        return {
          ...state,
          todos: updatedTodos,
        };
      }
      case "TOGGLE_COMPLETED": {
        const updatedTodos = state.todos.map((singleTodo) => {
          if (singleTodo.id === action.payload) {
            return {
              ...singleTodo,
              isCompleted: !singleTodo.isCompleted,
            };
          }
          return singleTodo;
        });
        return { ...state, todos: updatedTodos };
      }
      // case "EDIT_TODO": {
      // }
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });

  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
    setTodo("");
  };
  const deleteTodo = (id) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });

  const toggleIsCompleted = (id) =>
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id,
    });

  const isEditable = (id) => {
    console.log(id);
  };

  const renderTodoList = () =>
    state.todos.map((todo) => (
      <TodoList
        key={todo.id}
        todo={todo}
        deleteTodoFn={deleteTodo}
        toggleIsCompletedFn={toggleIsCompleted}
        isEditableFn={isEditable}
      />
    ));

  return (
    <div className="w-[700px] text-center mx-auto border-2 border-black py-8">
      <h1 className="text-4xl text-center mb-4 font-bold text-gray-700">
        Todo App
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={todo}
          placeholder="Add Todo"
          className="px-4 py-2 border border-gray-400 outline-none"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500"
        >
          Add
        </button>
      </div>

      <section>
        {state.todos.length === 0 && (
          <h4 className="text-red-500 text-lg">
            Empty list. Please add some todos.
          </h4>
        )}
        <ol className="flex flex-col text-xl gap-1 list-decimal list-inside">
          {renderTodoList()}
        </ol>
      </section>
    </div>
  );
};

export default TodoUsingUseReducer;
