import { useState } from "react";

export default function Update(props){
    const [title,setTitle]=useState(props.title);
    const [body,setBody]=useState(props.body);
    return (
    <article>
        <h2>Update</h2>
        <form onSubmit={(e)=>{
            e.preventDefault(); 
            // const title= e.target.title.value;
            // const body=e.target.body.value;
            props.onUpdate(title,body);
            }}>
            <p><input type="text" name="title" value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}></input></p>
            <p><textarea name="body" placeholder="body" value={body} onChange={(e)=>{
                setBody(e.target.value);
            }}></textarea></p>
            <p><input type="submit" value="Update"></input></p>
        </form>
    </article>
    );
}

// 밸류는 자동이 아니라 수동으로 해야 함.

// 부모로 부터 받은 것은 불변 객체. 프롭스
// 프롭스 타이틀을 못바꾸게 함.?
