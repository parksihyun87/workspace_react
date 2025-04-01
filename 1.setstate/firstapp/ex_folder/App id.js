
// 컴퍼넌트는 하나의 태그로 감싸져 있어야 함. 프롭스는 관용적인 매개변수 이름임.
import Header from "../src/Header";
import Nav from "../src/Nav";
import Article from "../src/Article";// 임포트+함수이름+from+경로 네가지.
import { useState } from "react";// 그냥 가져오는 거임.


function App() {
  // 변동하는 변수에 대한 부분
  const [mode, setMode]=useState("welcome");
  const [id, setId]=useState(0);

  const topics=[
    {id:1, title:"html", body:"html is ..." },
    {id:2, title:"css", body:"css is ..." },
    {id:3, title:"javascript", body:"javascript is ..." },
  ];

  // 내용 찍는 부분
  let content = null;
  if(mode==="welcome"){
    content= <Article title="Hi" body="Hello, web"></Article>;
  }else if(mode==="read"){
    let title, body;
    for(let topic of topics){
      if(topic.id === Number(id)){
        title=topic.title;
        body=topic.body;
        break;
      }
    }
    content= <Article title={title} body={body}></Article>;
  }

  //리턴부
  return(
    <>
      <Header title="REACT" onChangeMode={()=>{
        setMode("welcome");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setId(_id);
        setMode("read");
        // 셋 값 넘겨주기
        // 넘겨주는 것에는 어떤 영향이 있는가.
        }}></Nav>
        {content}
    </>
  );
  }

  export default App;
  
  // [변수이름]
  // 모드는 집중 함수부가 있다 (app) app 리턴부에 위에다가 자식들을 써준다.
  // 부모는 각종 정보를 전달해준다
  // 자식들은 프롭스로 받아서 도큐처럼 갖다 쓴다. 
  // 자식들은 온클릭 이벤트를 가지고 있다. 
  // 그래서 클릭하면 부모정의된게 발동한다. 부모정의안에는 실제로 바뀔 스테이트도 넣는다.
  // 모드에 영향을 주면 집중 함수부의 내용에도 영향을 줘서 내용을 변경시킨다.
  


