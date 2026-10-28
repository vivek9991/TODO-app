const TODO = ({ todoList, setTodoList, todoItem }) => {
  const deleteEntryFromList = () => {
    setTodoList(todoList.filter((todo) => todo.id !== todoItem.id));
  };
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={todoItem.completed}
        onClick={(e) => {
          const newlist = todoList.map((todo) => {
            if (todo.id == todoItem.id) {
              return { ...todo, completed: e.target.checked };
            } else {
              return todo;
            }
          });
          setTodoList(newlist);
        }}
      />
      <p style={{ textDecoration: todoItem.completed && "line-through" }}>
        {todoItem.text}
      </p>
      <button style={{ height: "20px" }} onClick={deleteEntryFromList}>
        Delete
      </button>
    </div>
  );
};

export default TODO;
