const Todos = ({ todo, clickRemoveTodo, toggleTodo }) => {
  return (
    <div key={todo.id} className="todo-card">
      <h3>{todo.title}</h3> {todo.content}
      <button onClick={() => clickRemoveTodo(todo.id)}>삭제하기</button>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.isDone === false ? "완료" : "취소"}
      </button>
    </div>
  );
};

export default Todos;
