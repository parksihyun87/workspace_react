import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { onUpdate, onDelete } from "./postListSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// 유즈 셀렉터 안들어감
// 디스패치도 안들어감

export default function ReadPost(){
    const {postId} = useParams();   
    const item=useSelector((state)=>state.postList.postList.find((p)=>p.id ===Number(postId)));
    // 콜렉터는 변수 선언과 함께, 유즈콜렉터 스테이트=>화살표함수모양에서 (state.슬라이서 name.state의 키값) 3가지로 가져온다.
    const dispatch=useDispatch();
    const navigate=useNavigate();

    // 배열이여서 find 함
    // 정보를 다 가져와서, 다른 것들이 달라져도 렌덜이 됨.
    // 이렇게 하면 해당 정보에 대해서만 구독을 한 셈임.
    
    const [title, setTitle] = useState(item? item.title:"");
    const [body, setBody] = useState(item? item.body:"");
    const [writer, setWriter] = useState(item? item.writer:"");

    if(!item){
        return;
    }

    return (
        <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <p><input type="text" name="title" value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}></input></p>
            <p><textarea name="body" value={body} rows="20" cols="40" onChange={(e)=>{
                setBody(e.target.value);
            }}></textarea></p>
            <p><input type="text" name="writer" value={writer} onChange={(e)=>{
                setWriter(e.target.value);
            }}></input></p>
            <button onClick={(e)=>{
                dispatch(onUpdate({id:item.id, title, body, writer}));
                navigate("/");
            }}>수정</button>
            <button onClick={(e)=>{
                dispatch(onDelete({id:item.id}));
                navigate("/");
            }}>삭제</button>

        </form>
        </>
    );
}