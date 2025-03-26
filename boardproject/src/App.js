import { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import ListAdd from "./ListAdd";


function App() {
  const [mode,setMode]=useState("list");
  const menuList=[
    {id:1, title: "글쓰기", mode:"write"},
    {id:2, title: "목록으로", mode:"list"},
  ];
  const [postList,setPostList]=useState([
    {id:1, title: "반갑습니다.", body: "hello", writer:"김진아"},
    {id:2, title: "안녕하세요.", body: "안녕하세요", writer:"김진아"},
  ]);
  // 글 목록

  let content= "null";  
  switch(mode){
    case "list":
      content=<ListAdd menuList={postList}></ListAdd>
      // "리스트입니다." 여기에 컴퍼넌트 새로 만들어서 출력하도록.
      break;
    case "write":
       content="글쓰기입니다."
      break;
    case "read":
      break;
  }
  
    // if(mode==="list"){
    //   content="리스트입니다."

    // } else if(mode==="write"){
    //   content="제목1 김진아 입니다."
    // }

    return (
    <>
      <Header title="글목록"></Header>
      <hr/>
      <Menu menuList={menuList} onChangeMode={(_mode)=>{
        setMode(_mode);
      }}></Menu>
      <hr/>
      {content}
      
    </>
  );
}

export default App;


// 다른 함수부



