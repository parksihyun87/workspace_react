import { useState } from "react";

export default function App(){
    const [setmode, modeChange]=useState("welcome");
    const [id , idChange]=useState(0);
    const [arr, arrChange]=useState([
        {title: "a1", log:"수수1"},
        {title: "a2", log:"수수2"},
        {title: "a3", log:"수수3"}
    ]);

    // content=null;    
    // if(setmode="welcome"){
    //     content=<h1>welcome</h1>;
   

    return (
        <>
      <Header changeH={()=>{
        modeChange("welcome");
      }}>
      </Header>
        </>
)}

function Header(props){
    return(
        <>
        <h1><a href="./" onClick={(e)=>{
            e.preventDefault();
            props.changeH();
        }
        }>헤더구조</a></h1>        
        </>
    )
}
