import { useState } from "react";

export default function Read(props){// 현재 넘버의 객체전송 받았음
    const [titleValue,setTitle]=useState(props.readObj.title);
    const [writerValue,setWriter]=useState(props.readObj.writer);
    const [bodyValue,setBody]=useState(props.readObj.body);




    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.onChangeMode(titleValue,writerValue,bodyValue);
            }}>
            <p><input name="title" onChange={(e)=>{
                setTitle(e.target.value);
            }} value={titleValue} type="text" style={{width:'60%', marginBottom: '10px'}}></input></p>
            <p><input name="writer" onChange={(e)=>{
                setWriter(e.target.value);
            }} value={writerValue} type="text" style={{width:'60%', marginBottom: '10px'}}></input></p>
            <p><textarea name="body" onChange={(e)=>{
                setBody(e.target.value);
            }} value={bodyValue} style={{width:'60%'}}></textarea></p>
            <input type="submit" value="수정" />
            <input type="button" value="삭제" onClick={(e)=>{
                props.onDeleteMode()
            }}/>
            </form>
        </>
    );
};
// 제대로 된 위치로 새롭게 영역 적용을 해보면서 관계 변경을 시도해보는 것이 필요하다.