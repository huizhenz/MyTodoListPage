const Todos = ({ todo, clickRemoveTodo, toggleTodo }) => {
  return (
    <div
      key={todo.id}
      // todo의 isDone이 false이면 working-todo-card 클래스 이름 부여
      //       "        true이면 done-todo-card 클래스 이름 부여
      className={!todo.isDone ? "working-todo-card" : "done-todo-card"}
    >
      <p className="pin-emoticon">📌</p>
      <h2>{todo.title}</h2> <p>{todo.content}</p>
      <div>
        <button className="removeBtn" onClick={() => clickRemoveTodo(todo.id)}>
          삭제
        </button>

        <button className="toggleBtn" onClick={() => toggleTodo(todo.id)}>
          {/* todo의 isDone이 false이면 완료, true이면 취소 버튼인 '조건부 렌더링' */}
          {!todo.isDone ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
};

export default Todos;
