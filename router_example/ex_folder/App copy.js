import { Link,Outlet,Route, Routes, useNavigate, useParams } from "react-router-dom";
// 링크, 아웃렛, 루트, 루츠, 까지 4개는 컴퍼넌트, 유즈 네이게이트와 파람스는 함수


function MainLayout(){
  const navigate = useNavigate(); //()=>{....}
  return(
    <>
    <h1>Hello React Router</h1>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <Outlet/><br></br>
    <button onClick={(e)=>{
     
      // 네비게이트 함수를 만들어서 리턴하는 함수
      // 그래서 네비게이트는 함수가 될 수 있다.
      navigate("/home");
    }}>홈으로</button>
    {/* 연결될 버튼 : 누르면 버튼 url로 이동*/}
    </>
  );
}
// 링크 투 
// 이벤트 핸들러 같은것이 콜백 함수
// 클릭하면 이 함수를 실행하라고 전달해준것. 예약한것. 특정상황에서 하는것.
// 내가 어느시점에 호출하는 것이 아니라. 이름없는 함수로 클릭에 등록. 
// 코드로 호출하지 않고 엔진이 함. 다른 존재가 해준다, 콜을 뒤에서 시스템이 해준다고 해서 콜백함수임
// 콜백함수(이벤트핸들러) 내에서는 유즈류를 못쓴다.
// 경로를 바꿔주는 함수. 

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<WelCome/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/topics" element={<Topics/>}>
          <Route path="/topics/:topicid" element={<Topic/>}></Route>
          {/* : 콜론 뒤에는 뭐라도 들어오면이라는 뜻의 변수, 아무거나 */}
          {/* 파라미터: 경로명으로 들어온 어떠한 데이터를 가져다가 변수에 넣어서 컴
          퍼넌트에서 사용하게 해줌. */}
          {/* 자식은 하나만 선택? */}
          {/* 마지막은 * 별표만 넣음. */}
          {/* 들어온 것을 경로를 통해 차례대로 보면서 분별함이다. */}
          {/* 토픽이 자식이 된다는게 뭔 뜻임? */}
          {/* 자동으로 넘어간다? */}
          {/* 경로가 들어오면 뒤에걸 호출하라. */}
          {/* 파라미터칸 포함 4칸이면 들어오는게 네칸이 되어야 함. */}

          {/* topics/:topcid/ 이게 넘어감 */}
          {/* 전역 저장소를 쓰기도 함. 리덕스. */}
          </Route>
      </Route>
    </Routes>
    </>
  );
}
// 토픽스 뒤에 경로가 들어오면 토픽 아이디라는 변수에 넣어서 이 컴퍼넌트에서 쓸 수 있게
//해준다.

function WelCome(){
  return(
    <>
    <h2>Welcome!!!</h2>
    </>
  );
}

function Home(){
  return(
  <>
  <h2>Home</h2>
  Home is...
  </>
  );      
}

const contents=[
  {id:1, title: "Html", body: "Html is..."},
  {id:2, title: "Css", body: "Css is..."},
  {id:3, title: "Javascript", body: "Javascript is..."}
];

function Topic(){
  // const Param=useParams();
  const {topicid}=useParams();
  // 토픽아이디 하면 여러개 중 토픽아이디만 가져온다는 뜻

  // 뒤의 훅은 정해져 있음.호출하면 경로명에서 파라미터들을 갖고 옴.
  // 객체로 들어옴.
  //{topicid:3, number:5} 이렇게 가져옴
  // Param.topicid, Param.number
  // {topicid:"3"} 이렇게 넘어옴
  // 객체분해모형을 씀
  const topic =contents.find((t)=>t.id === Number(topicid));

  return(
   <>
   <h3>{topic.body}</h3>
   </>
    );   
}


function Topics(){
  const list=[];
  for(let t of contents){
    list.push(<li><Link to={"/topics/" + t.id}>{t.title}</Link></li>);
    // 이 부분에서 아이디를 클릭하면 경로가 url에 포함이 되면 가져옴.
  }
  return(
  <>
  <h2>Topics</h2>
    <ul>
      {list}
    </ul>
    <Outlet/>
    {/* 자식 컴퍼넌트 */}
  </>
  );      
}

function Contact(){
  return(
  <>
  <h2>Contact</h2>
  Contact is...
  </>
  );      

}

export default App;

// 각 a를 누를때 경로명이 나오면서 어떤 컴포넌트를 짝 지우고 싶을때 쓰는것이
// 리액터 라우터이다.