import { useState } from "react";


export default function App(){
  const [mode,setMode]=useState("list")
  // // let content=null;
  switch(mode){
    case "list":
      break;
  }

  
  return (
    <>
      <Header ></Header>
      <Menu ></Menu>
      가나다라
    </>
  );
}


function Header(props){
return(
<h2>"테스트"</h2>
)
}

function Menu(props){

<h2>"테스트"</h2>
}