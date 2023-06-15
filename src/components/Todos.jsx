const Todos = ({ todo, clickRemoveTodo, toggleTodo }) => {
  return (
    <div
      key={todo.id}
      className={todo.isDone === false ? "working-todo-card" : "done-todo-card"}
    >
      <p className="pin-emoticon">📌</p>
      <h2>{todo.title}</h2> <p>{todo.content}</p>
      <div>
        <button className="removeBtn" onClick={() => clickRemoveTodo(todo.id)}>
          삭제
        </button>
        <button className="toggleBtn" onClick={() => toggleTodo(todo.id)}>
          {todo.isDone === false ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
};

export default Todos;
