
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

function Nav(props){//{topics:[...]},onChangeMode:(id)=>{alert(id);}
  const lis=[];
  for(let i=0; i<props.topics.length; i++){
    let t= props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);//t.id를 넘기면 1,2,3얼럿이 됨-나중개념 안중요.
    }}>{t.title}</a></li>);
  }
  // 이해 필요
  
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
  
  return(
    <>
      <Header title="REACT" onChangeMode={()=>{alert("Header");}}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{alert(id);}}></Nav>
      <Article title="Hi" body="Hello, React"></Article>
            
    </>
  );
}

export default App;

// 부모자에서 속성 전달과 함수정의 전달
// 자식자에서는 단순히 프롭스를 받아서 값으로 쓰거나
// 자식자에서 메서드로 프롭스.부모자에서 정의한 값대로 진행 해도 됨.
// 다른 함수 응용으로 자식자에서는 구현할 태그 값을 만들고 태그안에서 온클릭을 만들고 
// 화살표 함수를 만들고 그안에서 부모자 정의 메서드를 써준다.