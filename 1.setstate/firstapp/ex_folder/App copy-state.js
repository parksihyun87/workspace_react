
import { useState } from "react";
//리액트에서 유즈 스테이트를 가져왔음.

export default function App(){
    return <Counter></Counter>;
}


function Counter(){
    const [state,setState] = useState(0);

    return(
        <div>
            <h1>State 값: {state}</h1>
            <button onClick={()=>setState(state+1)
            }>
                1씩 증가
            </button>

        </div>
    )
}



// 리턴 컨트롤 판넬 하면 이 펑션이 불러와짐.


// 안됨 다시 ppt 보고 다시 해보기
