import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "알고리즘 공부하기",
      content: "알고리즘 문제를 풀어봅시다.",
      isDone: true,
    },
    {
      id: 2,
      title: "TIL 작성하기",
      content: "오늘 공부한 내용을 작성해봅시다.",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddTodo = () => {
    // event.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodo]); // 짜증나

    setTitle("");
    setContent("");
  };

  const clickRemoveTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const doneTodo = todos.find((todo) => todo.id === id);

    if (doneTodo) {
      doneTodo.isDone = !doneTodo.isDone;

      const newTodos2 = todos.filter((todo) => todo.id !== id);
      setTodos([...newTodos2, doneTodo]);
    }
  };

  // 여기서 if문 대신 filter 사용해서 map에 적용
  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <header>
        <div className="head-title">
          <span>My Todo List </span>
          <span>React</span>
        </div>
        <div className="input-form">
          제목 <input value={title} onChange={titleChangeHandler} />
          내용 <input value={content} onChange={contentChangeHandler} />
          <button onClick={clickAddTodo}>추가하기</button>
        </div>
      </header>
      <main>
        <h2>Working.. 🔥</h2>
        <div className="working-todolist">
          {workingTodo.map((todo) => {
            return (
              <div className="todo-card" key={todo.id}>
                <h3>{todo.title}</h3> {todo.content}
                <button onClick={() => clickRemoveTodo(todo.id)}>
                  삭제하기
                </button>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.isDone === false ? "완료" : "취소"}
                </button>
              </div>
            );
          })}
        </div>
        <h2>Done..! 🎉</h2>
        <div className="done-todolist">
          {doneTodo.map((todo) => {
            return (
              <div className="todo-card" key={todo.id}>
                <h3>{todo.title}</h3> {todo.content}
                <button onClick={() => clickRemoveTodo(todo.id)}>
                  삭제하기
                </button>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.isDone === false ? "완료" : "취소"}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
