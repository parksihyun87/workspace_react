// 자식 컴퍼넌트 연결
import { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import ListAdd from "./ListAdd";
import Write from "./Write";
import Read from "./Read";

// 상위 컴퍼넌트에 css를 하면 적용은 하위로 내려가지만 
// 사용하는 각 컴퍼넌트 마다 css 거는 것이 좋음.

function App() {
  // 상태 값 부분
  const [mode,setMode]=useState("list");
  const [Id,setId]=useState(0);
  const menuList=[
    {id:1, title: "글쓰기", mode:"write"},
    {id:2, title: "목록으로", mode:"list"},
  ];
  const [postList,setPostList]=useState([
    {id:1, title: "반갑습니다.", body: "hello", writer:"김진아"},
    {id:2, title: "안녕하세요.", body: "안녕하세요", writer:"김진아"}
  ]);
  const [nextId,setNextId]= useState(postList.length + 1);
  // 전체 변수 부분
  let content= null;  

  // 모드 조건 부분
  switch(mode){
    
    // 리스트 모드
    case "list":
      content=<ListAdd menuList={postList} onChangeMode={(_id)=>{
        setId(_id);
        setMode("read");
      }}></ListAdd>
      break;
   
    // 라이트 모드
    case "write": 
      content=<Write onChangeMode={(title,writer,body)=>{
      let newObj={id:nextId, title, writer, body};
      // _title 그냥 가져와도 된다. 이미 온체인지 모드 뒤에는 java script 영역이다.
      // 매개변수와 속성명을 같게 하면, 매개변수 하나만 써도 속석명안에 매개변수가 연결된다.
      const newMenuList =[...postList,newObj];
      setPostList(newMenuList);
      setMode("list");
      setNextId(nextId+1);
      }} ></Write> 
      // 이 영역 전체가 자바 스크립트.
      break; 
    
      // 리드 모드 
    case "read": 
      let readObj=postList.find((e)=>(Number(Id)===e.id)); 
      // 아이디를 가져올때 객체에서 빼와서 문자화 되어있어서 넘버붙여줘야 한다.
      // 파인드가 다 관여하며 해당 배열중 하나인 객체만 넘겨줌.
      // 한개만 찾을때는 파인드.
      content=<Read readObj={readObj} onChangeMode={(title, writer, body)=>{
        const changeObj={id:Number(Id), title, writer, body};
        const newReadLst=[...postList];
        for(let i=0; i<newReadLst.length;i++){
          if(newReadLst[i].id===Number(Id)){
            newReadLst[i]=changeObj;
            break;
          }
        }
        // 먼저 부모 함수에서 할 일 먼저 정리하고 진행하는 방법
        // let a of as 써도 될 것 같은데.
        setPostList(newReadLst);
        setMode("list");
      }} onDeleteMode={(e)=>{
        const filterLst=postList.filter((e)=>(e.id!==Number(Id)));
        setPostList(filterLst);
        setMode("list");
      }}></Read>;
      // 전달시에는 이름={객체값/배열값} 이런 결합으로 줘야 한다.
      // 배열에서 골라서 객체 뒤집어 쓰기는 다시 한번 해봐야 한다.

      break; 
      // case는 끝나면 탈출문이 필요함
  }
  
  // 리턴 부분
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



