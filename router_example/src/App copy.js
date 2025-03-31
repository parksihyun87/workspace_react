import { useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";

function MainLayout(){
  const light=useNavigate();
  
  return(
    <><ul>
        <li><Link to="/p1">링크투p1</Link></li>
        <li><Link to="/p2">링크투p2</Link></li>
        <li><Link to="/p3">링크투p3</Link></li>
    </ul>
    <button onClick={(e)=>{
      light("/");
      // 유즈 네비게이트를 만들어 리턴하는 함수
      // 네비게이트는 함수안에 함수를 반환하는 함수이며 그 안에 path가 엮여있다.
      // 변수명에 함수를 정의하여 저장하면 함수의 반환값을 부르게 되며
      // 이제 변수명(매개변수)의 형태로 함수안의 함수에 특정값이 
      // 연동된 호출이 이어진다.
    }}>홈으로</button>    
    <Outlet/>
    </>
  );
}

// 메인 레이아웃에는 링크투들을 넣어 놓기
// 디폴트 앱에는 루츠가 들어가면서 패스, 엘리먼트 넣어 주면서 메인 레이아웃도 가져오고
// 추후 속하는 영역 관계를 위해 부모 자식 자리를 표시할 것.
// 아울렛 자리에 루트상 아들 /와 연동된 컴퍼넌트의 리턴값이 연계된다.

export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Welcome/>}></Route>
          {/* 패쓰는 평범한 따옴표와 모든 경로고, 인덱스를
          쓸때는 패쓰를 생략한다. 엘레멘트는 중괄호와 바로안에
          태그를 쓰고 그 다음에 컴퍼넌트를 부른다. 루츠 방식일때의 컴퍼넌트 호출을
          state 영향 아래와 비교하면, 엘레멘트라는 연관어와, 
          맨 바깥 골격에 중괄호 하나 추가로 두 가지가 더 관련되어있다.
          */}
          <Route path="/p1" element={<Intro/>}></Route>
          <Route path="/p2" element={<Side/>}></Route>
          <Route path="/p3" element={<Topics/>}>
            <Route path="/p3/:params" element={<Topic/>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

// 중괄호 안에 태그 안에 컴포넌트를 넣을 것.
// 파람스를 써서. 

const informArr=[
  {id: 1, title: "이름1", body: "내용1"},
  {id: 2, title: "이름2", body: "내용2"},
  {id: 3, title: "이름3", body: "내용3"}
];

function Welcome(){
  return(
    <>
      <h1>기존의 장소의 한계를 깨는 장소 개념의 상상.
        그것은 작은 것에도 있겠다.
      </h1>
    </>
  );
}


function Intro(){
  return(
    <>
      "유즈파란바람바람스"
    </>
  );
  
}

function Side(){
  return(
    <>
      "~"
    </>
  );
}

function Topics(){//local:3000//p3(아들 링크 표시 p3/1,p3/2,p3/3)
  let Arr=[];
  for(let a of informArr){
    let pushLink= <li><Link to ={"/p3/"+a.id}>{a.title}</Link></li>
    // 따옴표와 변수 전부 중괄호 안에 넣고 더해야 한다.
    Arr.push(pushLink);
  }

  return(
    <>
      {Arr}
      <Outlet/>
    </>
  );
}

function Topic(){
  let {params}=useParams();
  // 가져온 객체정보는 let+ 중괄호+해당 키명+'='+'유즈 파람스+() 이렇게 7구성요소로 되어있으며
  // 변수 정의시 왼쪽 중괄호안에 객체의 키를 넣으면, 오른쪽 객체의 
  // 해당 키의 값이 연동되어 해당 변수에 저장되는 모양을 이용한다.
  // 마지막 부분의 '/~'에 대해 params가 연동되었다면, 
  // 경로주소가 어떻건 지금 컴퍼넌트 하나와만 관계를 맺게 되고,
  // 해당 컴퍼넌트는 마지막 분기점의 경로 값 정보를 쓸 수 있게 된다.
  // 이를 통해 상위 소속자의 객체와 연동된 타이틀이나 바디 값을 가져온다.

  const newInformArr= informArr.find((e)=>e.id===Number(params));
  // jsx에서 find는 중괄호와 의미있게 연계되지 않는다.

  return(
    <>
      {newInformArr.title}+{newInformArr.body}
    </>
)
};





