import React from "react";
import "./App.css";

function List({ todos, deleteHandler }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}

          <button
            className="btn btn-danger"
            onClick={() => deleteHandler(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
