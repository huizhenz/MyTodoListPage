import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Input from "./components/Input";
import "./App.css";

const App = () => {
  // 객체가 담긴 배열 todos를 useState 함수를 사용하여
  // State로 만들어 컴포넌트 안에서 렌더링 되게 해줌
  // 초기값은 localStorage에서 파싱해서 가져오거나 저장된 데이터가 없으면 []으로 설정
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todo")) || []
  );

  // todos의 값이 변경될 때마다 setItem을 호출하여 todos의 값을 localStorage에 저장
  // 의존성 배열 [todos]를 추가함으로써 todos가 변경될 때만 setItem이 호출되도록 설정
  // 컴포넌트가 렌더링될 때마다 (= state의 변경) 실행되는 useEffect 훅
  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todos), [todos]);
  });

  return (
    <div className="App">
      <header>
        <h1> ✔️ 투두리스트</h1>
      </header>
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} listIsDone={false} />
        <Todos todos={todos} setTodos={setTodos} listIsDone={true} />
      </main>
    </div>
  );
};

export default App;
