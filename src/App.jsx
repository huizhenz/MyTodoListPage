import React, { useState } from "react";
import Todos from "./components/Todos";
import Button from "./components/Button";
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
          <Button clickAddTodo={clickAddTodo} />
        </div>
      </header>
      <main>
        <h2>Working.. 🔥</h2>
        <div className="working-todolist">
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <Todos
                  key={todo.id}
                  todo={todo}
                  clickRemoveTodo={clickRemoveTodo}
                  toggleTodo={toggleTodo}
                />
              );
            }
          })}
        </div>
        <h2>Done..! 🎉</h2>
        <div className="done-todolist">
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return (
                <Todos
                  key={todo.id}
                  todo={todo}
                  clickRemoveTodo={clickRemoveTodo}
                  toggleTodo={toggleTodo}
                />
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
