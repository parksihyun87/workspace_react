// import './App.css';
// import { startTransition } from 'react';

// function App() {
  
//   return (
//     <div clssName="App">
//       <header>
//         <h1><a href="/">WEB</a></h1>
//       </header>
//       <nav>
//         <ol>
//           <li><a href="/read/1">html</a></li>
//           <li><a href="/read/2">css</a></li>
//           <li><a href="/read/3">js</a></li>
//         </ol>
//       </nav>
//       <article>
//         <h2>welcome</h2>
//         Hellow, WEB
//       </article>
//     </div>
//   );
// }

// function App() {
//   let desc = '';
//   const loginYn = 'Y';
//   if(loginYn === 'Y') {
//    desc = <div>홍창기 입니다.</div>;
//   } else {
//    desc = <div>비회원입니다.</div>;
//   }
//   return (
//    <>
//     {desc}
//    </>
//   );
//   }
//----------------------------------------------------------------------------------
// function App() {
//   const loginYn = "Y";
//   return (
//    <>
//     <div>
//      {loginYn === "Y" ? (<div>홍창기 입니다.</div>) : 
//       (<div>비회원입니다.</div>)}
//     </div>
//    </>
//   ); }

// 컴퍼넌트는 하나의 태그로 감싸져 있어야 함. 프롭스는 관용적인 매개변수 이름임.
import Header from "../src/Header";// 임포트 이름만 쳐도 완성
import Nav from "../src/Nav";
import Article from "../src/Article";// 임포트+함수이름+from+경로 네가지.


function App() {
  const topics=[
    {id:1, title:"html", body:"html is ..." },
    {id:2, title:"css", body:"css is ..." },
    {id:3, title:"javascript", body:"javascript is ..." },
  ];
  
  return(
    <>
      <Header title="REACT" onChangeMode={()=>{alert("Header");}}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{alert(id);}}></Nav>
      <Article title="Hi" body="Hello, React"></Article>
    </>
    // 배열(안엔 객체) 전달시에는 {}이렇게 중괄호 진행해야 함.
  );
  }

  export default App;
  // 익스포트는 남에게 연결하겠다는 뜻임. 두 개 전달할 때는 export{GetName,GetAge};
