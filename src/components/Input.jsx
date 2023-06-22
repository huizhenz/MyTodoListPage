import { useState } from "react";
import uuid from "react-uuid";

const Input = ({ todos, setTodos }) => {
  // 입력한 제목과 내용 input값 변수들을 useState 함수를 사용하여
  // State로 만들어 컴포넌트 안에서 렌더링되게 해줌
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 입력받은 제목 input값을 setTitle을 사용해서 넣음
  const titleChangeHandler = (event) => setTitle(event.target.value);

  // 입력받은 내용 input값을 setContent를 사용해서 넣음
  const contentChangeHandler = (event) => setContent(event.target.value);

  // 버튼을 클릭해서 제목과 내용이 빈값이 아니라면, 새로운 객체에 입력받아 놓은 값들을 저장하고
  // setTodos에서 원래의 todos 배열을 spread 해주고 그 배열 뒤에 새로운 객체인 newTodo를 이어서 합쳐줌
  // 왜 굳이 ? => 배열은 불변성이 없어 이를 지켜주기 위해 직접 값을 변경하지 않고 따로 복사한 뒤
  //            그 뒤에 새로운 객체를 추가해줌으로써 기존의 배열 값도 지킬 수 있음
  // 마지막으로 setTitle과 setContent을 이용하여 input은 빈 값으로 변경 시킴
  const submitAddTodo = (event) => {
    // form 태그로 인한 새로고침 방지
    event.preventDefault();

    if (title === "") {
      alert("제목을 입력해주세요 !");
    } else if (content === "") {
      alert("내용을 입력해주세요 !");
    } else {
      const newTodo = {
        id: uuid(),
        title,
        content,
        isDone: false,
      };

      setTodos([...todos, newTodo]);

      alert("등록 성공 !");

      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <form className="inputForm">
        <label>제목</label>
        <input value={title} onChange={titleChangeHandler} />
        <label>내용</label>
        <input value={content} onChange={contentChangeHandler} />
        <button type="sumbit" onClick={submitAddTodo}>
          등록
        </button>
      </form>
    </>
  );
};

export default Input;
