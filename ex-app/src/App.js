

// 기본부
export default function App() {
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

//----- 기타 컴퍼넌트 부------//


// 헤더
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

// 네브
function Nav(props){//{topics:[...]},onChangeMode:(id)=>{alert(id);}
  const lis=[];
  for(let i=0; i<props.topics.length; i++){
    let t= props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);
    }}>{t.title}</a></li>);
  }
  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>
  );
}
// 아티클
function Article(props){
    return(
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
    );
}

// 지금 해야 할 것.. 
// 업데이트 모드를 만들것.
// 리드모드시 업데이트가 눌릴 수 있게 할 것.

