// import logo from './logo.svg';
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
function Header(props){ //{title:"REACT",desc :"REACT is...", onChangeMode()=>{alert("header")})} 객체 형태로 전달된 거임.
  return (
    <header>
        <h1><a href="/" onClick={(e)=>{
          e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  );
}
// 프롭스로 매개변수를 받고, 객체가 생성되어 이름과 값이 생겼다.
// 엘레멘트를 불러오는 곳에서 넣을 (객체의 속성 키,=,"",객체 속성값)
//  원함수부에서  그것이 어떤 곳에서 생기는지 지정하며 그때는 {}중괄호를 쓴다.

// 컴퍼넌트는 하나의 태그로 감싸져 있어야 함.
// 프롭스는 매개변수 이름일뿐 절대는 아니지만 관용적임.

function Nav(props){//{topics:[...]},onChangeMode:(id)=>{alert(id);}
  const lis=[];
  for(let i=0; i<props.topics.length; i++){
    let t= props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);//t.id를 넘기면 1,2,3얼럿이 됨-나중개념 안중요.
    }}>{t.title}</a></li>);
    // 포문 반복할때 세개를 구분하게 해달라고 유니크키 콘솔 요청이 생김
  }
  // 세개가 생성이 됨.
  
  // 배열안에 객체가 있다. 이름은 토픽스.
  // 자바스크립트 코드를 만들려면 {}중괄호를 써야 함.
  // 일단 중괄호 변수 저장 활용하면 씀.
  // 온클릭은 클릭이 대문자. 이벤트 핸들러 등록. 매개변수 확인
  // 적용하는 함수의 모양 확인. 누른 타겟을 확인하려고 e.target을 사용
  // 리액트는 개발서버를 통해 요청이 들어가서 렌더링 되는 관계가 있는데.

  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>

  );
}

function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics=[
    {id:1, title:"html", body:"html is ..." },
    {id:2, title:"css", body:"css is ..." },
    {id:3, title:"javascript", body:"javascript is ..." },
  ];
  // 통째로 넘기기
  
  return(
    <>
      <Header title="REACT" onChangeMode={()=>{alert("Header");}}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{alert(id);}}></Nav>
      <Article title="Hi" body="Hello, React"></Article>
            
    </>
  );
}
// 변수 전달하려면 안에다가 써주면 됨
// 함수 호출하면서 리액트라는 변수 넣어준거임.
// 배열(안엔 객체) 전달시에는 이렇게 진행해야 함.
// 변수의 값이 넘어가야 해서 중괄호를 사용함.
// 배열로 전달됨 
// 오히려 리턴값이 있어야 중괄호 생략
// 이벤트 리스너 함수도 속성이름, 속성값으로 전달,리스너 함수 작성시
// 호출함수명과 화살표 함수쓰고, 변수 여부 적음
// 디폴트에서 함수를 정의해서 전달하고, 위에서는 그걸 가지고 뭘 할지 정한다. 

  export default App;
  
  
  
  
  
  // 익스포트는 공개하겠다.
  // 두개 일때는 export{GetName,GetAge};
  // 가져다 쓸 때는 import{GetName,GetAge} from "./ConpFunc";
  // default는 중괄호 없이 선언해서 사용. 많이 있어도 그렇게 사용
  // 하나의 파일에는 하나만 선언해서 사용.
  // 하나로 싸줘야 하는데 빈 태그로 싸줘도 됨.
  // 에치티엠엘과 제에스는 에치티엠엘이 폴더에 하나면 자동 연결
  // 스타일도 전달은 됌
  // 함수 넘기기 해보자. 함수 자바스크립트