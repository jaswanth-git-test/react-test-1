import React, { useState, useEffect } from "react";
import List from "./List";
import "./App.css";
function App() {
  const getTodos = () => {
    let list = JSON.parse(localStorage.getItem("list"));
    let gotList = list ? list : [];
    return gotList;
  };
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(getTodos());
  const changeHandler = (e) => setTask(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container text-white">
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo List</h5>
            <form onSubmit={submitHandler}>
              <input
                className="form-control"
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
              />
              &nbsp;&nbsp;
              <input
                type="submit"
                className="btn btn-primary"
                name="Add"
                value="Add"
              />
            </form>

            <List todos={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
