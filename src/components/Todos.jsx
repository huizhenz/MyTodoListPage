const Todos = ({ todos, setTodos, listIsDone }) => {
  // 각 todos 배열의 id값을 매개변수로 받아 filter 메서드를 사용해 함수를 돌리다
  // 그 매개변수 id 값과 다른 요소들만 새로운 배열인 newTodos에 저장해줌
  const clickRemoveTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    window.localStorage.removeItem(setTodos(newTodos));
  };

  // 완료(or 취소)하려는 객체의 id를 매개변수로 받아와 todos의 id와 매개변수 id가 같다면 dontTodo에 담아줌
  // 만약 doneTodo라면 해당 doneTodo의 isDone을 현재의 'å역'으로 바꿔준 뒤,
  // todos 배열의 filter를 사용하여 todos의 id와 매개변수 id가 같지 않은 객체들만 새로운 배열 newTodos2에 담고
  // setTodos에서 newTodos2를 spread해주고 그 뒤에 doneTodo를 이어서 새 todos를 업데이트 해줌
  const toggleTodo = (id) => {
    const doneTodo = todos.find((todo) => todo.id === id);

    // doneTodo에 값이 있으면 실행되는 조건문
    if (doneTodo) {
      doneTodo.isDone = !doneTodo.isDone;

      const newTodos2 = todos.filter((todo) => todo.id !== id);
      setTodos([...newTodos2, doneTodo]);
      console.log(todos);
    }
  };

  return (
    <>
      <h2 className="listTitle">
        {!listIsDone ? "[ 진행중.. 🐣 ]" : "[ 완료..! 🐥 ]"}
      </h2>
      <div className="todolistContainer">
        <div className={!listIsDone ? "workingTodolist" : "doneTodolist"}>
          {todos
            .filter((todo) => todo.isDone === listIsDone)
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  className={!listIsDone ? "workingTodoCard" : "doneTodoCard"}
                >
                  <p className="pinEmoticon">📌</p>
                  <h2>{todo.title}</h2> <p>{todo.content}</p>
                  <div>
                    <button
                      className="removeBtn"
                      onClick={() => clickRemoveTodo(todo.id)}
                    >
                      삭제
                    </button>
                    <button
                      className="toggleBtn"
                      onClick={() => toggleTodo(todo.id)}
                    >
                      {/* todo의 isDone이 false이면 완료, true이면 취소 버튼인 '조건부 렌더링' */}
                      {!listIsDone ? "완료" : "취소"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Todos;
