import { Outlet } from "react-router-dom";

export default function Header(){
    return(
        <>
            <h1>To-DO List</h1>
            
            <Outlet></Outlet>
            
        </>
    );
}