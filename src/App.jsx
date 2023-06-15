import React, { useState } from "react";
import Todos from "./components/Todos";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  // 객체가 담긴 배열 todos를 useState 함수를 사용하여
  // State로 만들어 컴포넌트 안에서 렌더링 되게 해줌
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

  // 입력한 제목과 내용 input값 변수들을 useState 함수를 사용하여
  // State로 만들어 컴포넌트 안에서 렌더링되게 해줌
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 입력받은 제목 input값을 setTitle을 사용해서 넣음
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 입력받은 내용 input값을 setContent를 사용해서 넣음
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // 버튼을 클릭해서 제목과 내용이 빈값이 아니라면, 새로운 객체에 입력받아 놓은 값들을 저장하고
  // setTodos에서 원래의 todos 배열을 spread 해주고 그 배열 뒤에 새로운 객체인 newTodo를 이어서 합쳐줌
  // 왜 굳이 ? => 배열은 불변성이 없어 이를 지켜주기 위해 직접 값을 변경하지 않고 따로 복사한 뒤
  //            그 뒤에 새로운 객체를 추가해줌으로써 기존의 배열 값도 지킬 수 있음
  // 마지막으로 setTitle과 setContent을 이용하여 input은 빈 값으로 변경 시킴
  const clickAddTodo = () => {
    if (title === "") {
      alert("제목을 입력해주세요 !");
    } else if (content === "") {
      alert("내용을 입력해주세요 !");
    } else {
      const newTodo = {
        id: todos.length + 1,
        title,
        content,
        isDone: false,
      };

      setTodos([...todos, newTodo]);

      setTitle("");
      setContent("");
    }
  };

  // 각 todos 배열의 id값을 매개변수로 받아 filter 메서드를 사용해 함수를 돌리다
  // 그 매개변수 id 값과 다른 요소들만 새로운 배열인 newTodos에 저장해줌
  const clickRemoveTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 완료(or 취소)하려는 객체의 id를 매개변수로 받아와 todos의 id와 매개변수 id가 같다면 dontTodo에 담아줌
  // 만약 doneTodo라면 해당 doneTodo의 isDone을 현재의 '역'으로 바꿔준 뒤,
  // todos 배열의 filter를 사용하여 todos의 id와 매개변수 id가 같지 않은 객체들만 새로운 배열 newTodos2에 담고
  // setTodos에서 newTodos2를 spread해주고 그 뒤에 doneTodo를 이어서 새 todos를 업데이트 해줌
  const toggleTodo = (id) => {
    const doneTodo = todos.find((todo) => todo.id === id);

    if (doneTodo) {
      doneTodo.isDone = !doneTodo.isDone;

      const newTodos2 = todos.filter((todo) => todo.id !== id);
      setTodos([...newTodos2, doneTodo]);
      console.log(todos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> ✔️ 투두리스트</h1>
        <div className="input-form">
          <label>제목</label>
          <input value={title} onChange={titleChangeHandler} />
          <label>내용</label>
          <input value={content} onChange={contentChangeHandler} />
          <Button onClick={clickAddTodo}>등록</Button>
        </div>
      </header>
      <main>
        <h2> [ 진행중.. 🐣 ]</h2>
        <div className="working-todolist">
          {todos.map((todo) => {
            // todos 배열에서 isDone이 false인 객체들만 return되어 working-todolist에 담기게 해줌
            if (!todo.isDone) {
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
        <h2>[ 완료..! 🐥 ] </h2>
        <div className="done-todolist">
          {todos.map((todo) => {
            // todos 배열에서 isDone이 true인 객체들만 return되어 done-todolist에 담기게 해줌
            if (todo.isDone) {
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
