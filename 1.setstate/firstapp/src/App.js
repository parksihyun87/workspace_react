
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import { useState } from "react";
import Create from "./create";
import Update from "./Update";


function App() {
  const [mode, setMode]=useState("welcome");
  const [id, setId]=useState(0);
  const [topics,setTopics]=useState([
    {id:1, title:"html", body:"html is ..." },
    {id:2, title:"css", body:"css is ..." },
    {id:3, title:"javascript", body:"javascript is ..." },
  ]);
  const [nextId, setNextId]=useState(topics.length+1);

  let content = null;
  let contextControl = null;

  // * 웰컴 모드
  if(mode==="welcome"){
    content= <Article title="Hi" body="Hello, web"></Article>;

  // * 리드 모드
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
    
    contextControl = <>
    <li><a href={"/update/"+id} onClick={(e)=>{
      e.preventDefault();
      setMode("update");
    }}>Update</a></li>
      {/* 현재 아이디를 삭제함 */}
    <li><button onClick={(e)=>{
      const filterTopics=topics.filter((t)=>t.id!==Number(id))
      setTopics(filterTopics);
      setMode("welcome");
    }}>Delete</button></li>
    </>
    // 태그가 여러개 내용으로 들어갈때는 빈태그로 감싸는 경우가 많음
  
    // * 크리에이트 모드
  }else if(mode==="create"){
    content =<Create onCreate={(_title,_body)=>{
      let newTopic= {id:nextId, title:_title, body: _body};
      let newTopics=[...topics, newTopic];
      setTopics(newTopics);
      setId(newTopic.id);
      setNextId(nextId + 1);
      setMode("read");
      
      // topics.push(newTopic)
      // setTopics(topics);
    }}></Create>

  //* 업데이트 모드
  }else if(mode === "update"){
    let topic=topics.find((t)=>t.id===Number(id));
    // for(let t of topics){
    //   if(t.id===Number(id)){
    
    content= <Update title={topic.title} body={topic.body} onUpdate={(title,body)=>{
      const updateTopic={id:Number(id), title, body}; //{id:1, title:"html", body: "html is.."}
      const updateTopics=[...topics];
      for(let i=0; i<updateTopics.length;i++){
        if(updateTopics[i].id === Number(id)){
          updateTopics[i]=updateTopic;
          break;
        }
      }
      setTopics(updateTopics);
      setMode("read");
      // 객체도 배열안에 있으면 덮어씌워 진다.
    }}></Update>
  }
  // 

  //* 리턴부분
  return(
    <>
      <Header title="REACT" onChangeMode={()=>{
        setMode("welcome");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setId(_id);
        setMode("read");
        }}></Nav>
        {content}

        <li><a href="/create" onClick={(e)=>{
          e.preventDefault();
          setMode("create");
        }}>Create</a></li>
        
        {contextControl}
        {/* 새로 구현된 구역 */}
    </>
  );
  }
  export default App;
  


