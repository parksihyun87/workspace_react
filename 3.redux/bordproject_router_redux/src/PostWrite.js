import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



export default function PostWrite(){
    const dispatch=useDispatch();
    const navigate = useNavigate();

    
    //디스패치만 하면 됨
    // 임포트 안써짐.

    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title =e.target.title.value;
            const body = e.target.body.value;
            const writer = e.target.writer.value;
            dispatch(onSave({title, body, writer}));// type: 이 어떻게 생성될까.
            navigate("/");


        }}>
            <p><input type="text" name="title" placeholder="제목입력"></input></p>
            <p><textarea name="body" placeholder="내용입력" rows="20" cols="40"></textarea></p>
            <p><input type="text" name="writer" placeholder="작성자이름"></input></p>
            <input type="submit" value="저장"></input>
        </form>
        </>
    );
}