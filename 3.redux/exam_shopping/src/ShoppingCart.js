import { useDispatch, useSelector } from "react-redux";
import { onDelete, onModify } from "./counterSlice";



export default function ShoppingCart(){
  const dispatch=useDispatch();
  const shopArr=useSelector((state)=>(state.shopping.arr));
  // 함수이긴 한데, 여러줄로 하기보단 한줄로 가져오는 함수
  // 공식: 유셀스슬이
  const newArr=[];
  for(let m of shopArr){
    newArr.push(
      <li id={m.id}>{m.title}-{m.price}원 X {m.number}{<button onClick={(e)=>{
        dispatch(onDelete(m.id));
        // 항상 리덕스 하에서는 (디스패치,함수쓰기) 같이 묶자.
      }}>Remove</button>}<input type="number" onChange={(e)=>{
        dispatch(onModify({id:m.id, number:e.target.value}));
      }}
      value={m.number}/></li>);
  }

  return (
      <>
        <h1>Shopping Cart</h1>
        <ul>
          {newArr}
        </ul>
      </>
    );
  }
  
  
// (유즈디스패치, 유즈셀렉터(유셀)) 이 두가지는 변수로 저장을 해야 하며, 임포트는 자기
// 자신만 리액트-리덕스 에서 해온다.