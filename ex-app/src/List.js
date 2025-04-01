import { onSave,onDelete } from "./couterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function List(){
    const dispatch=useDispatch();
    const arr=useSelector((state)=>state.counter.wishList);
    // arr는 
    
    return(
        <>  <form name="formTag" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(onSave({title:e.target.body.value, id: Date.now()}));
            // 내가 보내주는 형식으로 받는 쪽에서도 받는다. 둘 이상이므로 객체로 보내는 것이 좋다.
            // 아이디는 필요한 양식이다.
        }}>
                <input type="text" name="body"/>
                <input type="submit" value="누르기"/>
            </form>

            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item.title}<button id={index} onClick={(e)=>{
                        dispatch(onDelete({id: item.id}));
                        // 여기서 id는 각 arr배열의 id를 뜻하게 된다.
                        // 배열로 생성은 끝났지만, 클로저라는 기능으로 온클릭 이벤트 핸들러가 그때의 아이디를 기억하고 있다고 한다. 
                }}>삭제</button></li>))}
            </ul>
        </>
    );
}

