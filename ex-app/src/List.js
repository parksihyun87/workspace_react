import { onSave,onDelete } from "./couterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function List(){
    const dispatch=useDispatch();
    const arr=useSelector((state)=>state.counter.wishList);
    // 스테이트 상, 네임, 이니셜 스테이트 안의 속성명
    // 밑에는 알맞은 형식으로 써 준다.
    // 처음은 state로 시작하고, 

    
    // 버튼을 누르면 으로 해당 내용이 실행되도록.
    // 눌르면 set state의 배열안에 해당 내용을 넣어버림, 
    // 긁어와야 하는 내용은 e.target의 내용들임
    // 안의 내용을 긁어와서 li에 추가.
    // 함수부의 내용은 본대에서 정의
    // 일단 한줄이라도 넣어 볼 것.
    // for문으로 돌려서 li를 만들고 넣어서 발행.

    
    return(
        <>  <form name="formTag" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(onSave({title:e.target.body.value, id: Date.now()}));
            // 왜 타이틀인가.
        }}>
            {/* 타이틀: e.target.으로 해야 함.그래야 payload형식을 맞추게 됨. */}
                <input type="text" name="body"/>
                <input type="submit" value="누르기"/>
                {/* submit 주의 */}
            </form>

            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item.title}<button id={index} onClick={(e)=>{
                        dispatch(onDelete({id: item.id}));
                        //객체 형태로 넘겨주자. 
                }
                }>삭제</button></li>))}
            </ul>
            {/* 맵을 이용하여 작성.  */}

        </>
    );
}

