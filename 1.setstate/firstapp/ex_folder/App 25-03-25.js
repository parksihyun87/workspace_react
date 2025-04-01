
import Header from "../src/Header";
import Nav from "../src/Nav";
import Article from "../src/Article";
import { useState } from "react";
import Create from "../src/create";


function App() {
  const [mode, setMode]=useState("welcome");
  const [id, setId]=useState(0);
  const [topics,setTopics]=useState([
    {id:1, title:"html", body:"html is ..." },
    {id:2, title:"css", body:"css is ..." },
    {id:3, title:"javascript", body:"javascript is ..." },
  ]);
  // 스테이트 값은 객체도 들어갈 수 있음
  // 배열을 통으로 스테이트로 만들어 줌.
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
  }else if(mode==="create"){
    content =<Create onCreate={(_title,_body)=>{
      let newTopic= {id:topics.length+1, title:_title, body: _body};
      let newTopics=[...topics, newTopic];
      setTopics(newTopics);
      setId(newTopic.id);
      setMode("read");
      // 앞의 것은 흩뿌려 넣고 뒤는 새로운 것은 또 넣겠다는 뜻.
      // newTopics.push(newTopic);
      //...topics는 안에 있는 모든 것을 나눠다가 흩뿌려 놓겠다는 이야기
      // 레스트 연산자라고 함.
      // for(let t of topics){
      //   newTopic.push(t);
      // }
      // 상태값 렌더링 예약이라서 비동기 임.
      // 한번에 바꾸지 않음. 끝나고 나서 빈틈에 처리함.


      // topics.push(newTopic)
      // setTopics(topics);
    }}></Create>
  }

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

        <a href="/create" onClick={(e)=>{
          e.preventDefault();
          setMode("create");
        }}>Create</a>
        {/* 누르면 하게 하려고 */}
    </>
  );
  }

  export default App;
  
  // 모드는 app같은 집중 함수부가 있는데, 리턴부에 위에있는 자식들이 가져갈 객체와
  // 함수 정의를 정해준다. 이렇게 부모는 각종 정보를 전달해준다. 
  // 자식들은 프롭스로 받아서 도큐처럼 갖다 쓴다. 자식들은 온클릭 이벤트를 가지고 있다.
  // 그래서 클릭하면 부모정의된게 발동한다. 부모 정의안에는 실제로 바뀔 스테이트 상태도 넣어준다.
  // 3자로 영향을 미칠 모드를 정하고
  // 에 영향을 주면 집중 함수부의
  // 내용에도 영향을 줘서 내용을 변경시킨다. 함수는 상태 변화를 만들려고 정의해서 쓰는 것이고
  // 자식은 자신이 가지고 있는 정보중에 그 함수부에 뭐가 들어가는지만 관계를 맺어
  // 출력 결과물이 다르게 영향을 준다.

  // topics=[];
  // 변수에 저장. 배열도 객체임,
  // 배열이 메모리에 저장되는 번지값이 저장되는 것임
  // 위치=>참조값 을 변수에 저장.
  // 1000번지에 저장되어있으면 모든 객체는 동일함
  // 위치값이 변수에 저장.
  // topics.push해서 새로운 객체 푸시되어도 위치가 변하지는 않음, 위치가
  // 넓어짐 setTopics(topics)주소값만 같다고 여김, 같은 주소값인데 하면서
  // 재랜더링 안할려고 함. 같은 변수로 하면 안됨.
  // 
  


