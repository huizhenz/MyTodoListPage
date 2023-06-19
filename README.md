<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# React 개인 과제 'My Todo List'
Todo List를 작성하여 등록하는 기본적인 웹 애플리케이션  

## 💻 과제 소개
![Jun-16-2023 04-03-13](https://github.com/huizhenz/MyTodoListPage/assets/133093192/4aa2c462-9636-4928-a8f0-9a053a0db696)
<https://my-todo-list-page.vercel.app/>

### 1. 과제 기간
2023.06.12 - 2023.06.15

### 2. 기술 스택
- React  
- JavaScript  
- HTML  
- CSS  

## 💡 주요 기능 
1. UI 구현
2. Todo 추가
3. Todo 삭제
4. Todo 완료상태 변경
   
### 1. 필수 요구사항
1. 제목과 내용 입력 후 버튼을 클릭하여 Todo를 추가하고 input은 빈 값이 되도록 구성
2. Todo의 isDone이 true면 취소, fasle면 완료인 조건부 렌더링 구성
3. Todo가 Working(진행중)이면 위쪽, Done(완료)이면 아래쪽에 리스트를 위치
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고 전체화면은 가운데 정렬 구성
5. 반복되는 컴포넌트를 분리하여 관리하기

## 🔗 컴포넌트 구조
Q. 왜 컴포넌트로 분리하여 사용해야할까 ?  
A. 

### 1. Todos
`./components/Todos`
: Todos 컴포넌트에서는 App.jsx에서 준 todo, clickRemoveTodo, toggleTodo를 이용하여 todos객체로 이루어진 배열에 관한 정보를 받았다. 이 컴포넌트 내부에서는 삼항연산자를 사용하여 조건부로 두개의 todo-card 클래스가 적용되게끔 하였고, 또한 toggleBtn 클래스의 버튼(내부)명 값을 조건부 렌더링되게 구현했다. 또한 컴포넌트 안에서 clickRemoveTodo를 통해 삭제까지 가능하다.

### 2. Button
`./components/Button`
: 클릭 시 clickAddTodo 함수가 실행되는 Todo 등록 버튼을 컴프넌트로 분리하여 관리해줬다. Button 컴포넌트에 props를 이용하여 onClick={props.onClick}을 통해 onClick 시 clickAddTodo가 실행되고 {props.children}을 통해 "등록"이라는 버튼(내부)명을 받는다.

## ⚠️ 트러블 이슈

>>>>>>> 6dfc6d2cb48ce851b1cd1adb19473b4f5b448c68
