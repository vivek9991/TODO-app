import React from "react";
import TODO from "./TODO";
function App() {
  const [count, setCount] = React.useState(0);
  const addTodo = () => {
    if (searchText.trim() === "") {
      return;
    }

    setCount(count + 1);
    setTodoList([
      ...todoList,
      {
        id: count,
        text: searchText.trim(),
        completed: false,
      },
    ]);
  };

  const clear = () => {
    setSearchText("");
  };
  const [searchText, setSearchText] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  return (
    <>
      <h1>TODO List</h1>
      <div className="searchBoxAndBtn">
        <input
          type="text"
          placeholder="Enter todo"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button onClick={addTodo}>Add</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div className="todoContainer">
        {todoList?.map((todo) => (
          <TODO
            key={todo.id}
            todoList={todoList}
            setTodoList={setTodoList}
            todoItem={todo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
