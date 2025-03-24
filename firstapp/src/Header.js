export default function Header(props){ //{title:"REACT",desc :"REACT is...", onChangeMode()=>{alert("header")})} 객체 형태로 전달된 거임.
  return (
    <header>
        <h1><a href="/" onClick={(e)=>{
          e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  );
}


 