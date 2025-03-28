import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";

function MainLayout(){
  return(
    <><ul>
        <li><Link to="/p1">링크투p1</Link></li>
        <li><Link to="/p2">링크투p2</Link></li>
        <li><Link to="/p3">링크투p3</Link></li>
    </ul>
    <Outlet/>
    </>
  );
}

// 메인 레이아웃에는 링크투들을 넣어 놓기
// 디폴트 앱에는 루츠가 들어가면서 패스, 엘리먼트 넣어 주면서 메인 레이아웃도 가져오고
// 추후 속하는 영역 관계를 위해 부모 자식 자리를 표시할 것.

export default function App(){
    
  return(
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/p1" element={<Intro/>}></Route>
          <Route path="/p2" element={<Side/>}></Route>
          <Route path="/p3" element={<Topics/>}>
            <Route path="/p3/:params" element={<ti1/>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

// 중괄호 안에 태그 안에 컴포넌트를 넣을 것.
// 파람스를 써서. 
// 

const informArr=[
  {id: 1, title: "이름1", body: "내용1"},
  {id: 2, title: "이름2", body: "내용2"},
  {id: 3, title: "이름3", body: "내용3"}
];

function Intro(){
  return(
    <>
      "유즈파란바람바람"
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

function Topics(){
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

function Id(){
let ti=useParams();


};





