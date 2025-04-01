import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 문법 구조...?

import App from './App';
// 함수 임포트 (가져오려는 페이지 함수, 프롬, 경로) 세가지가 필요
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 루트라는 아이디를 가진자를 가져와라. 얘를 루트로 삼는 가상돔을 만들겠다.
// 루트노드는 뿌리 구조에서 최상위를 말함.
// 임포트는 포함시킨다. 앱.js 위의 것. 앱은 실행하겠다.
// 바디 바로 밑의 디비전 태그에 애프를 실행해서 쓰겠다.
// 컴포넌트를 리턴하려면 하나로 감싸서(디브) 리턴해줘야 함


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 가상돔이 메모리에 만들어져 있는 상태.
// 리액트는 카멜 표기법으로 함.