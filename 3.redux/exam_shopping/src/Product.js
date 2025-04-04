import {useDispatch, useSelector} from 'react-redux';
import { onPlus } from './counterSlice';

export default function Product() {
  const dispatch=useDispatch();
  const prodArr=useSelector((state)=>(state.shopping.arr));
  // arr을 가져온 상태.
  // 스테이트.슬라이스의 자체 네임.이니셜스테이트하이름, 스슬이
  // 콘솔로그의 백틱 하 사용방법이 틀려서 실수.
  const newArr=[];
  
  for(let i=0;i<prodArr.length;i++){
    newArr.push(
      <li>{prodArr[i].title}-{prodArr[i].price}원<button id={prodArr[i].id} onClick={(e)=>{
        dispatch(onPlus(prodArr[i].id));
        // 여기에 넣고 싶은 만큼 aciton.payload 변수 개수를 넣어 주면 된다.
        // 보통 객체로 보낸다고 하는데 받는 곳에서는 어떻게 받게 될까.
        // 여기는 증가만 한다.
      }}>add to cart</button> </li>
      
    );
    console.log(prodArr);
  }

  return (
    <>
      <ul>
        {newArr}
      </ul>
    </>
    );
  }
  
// 유즈셀렉터는 리듀서 함수처럼 state를 가지고 화살표 함수모양을 그리며, state.을 머리로 나머지가 결합된다.
// 셀렉터 할때는 state.이름(이 꼭 들어간다.).가져오려는 속성명 이라는 모양이며, 리듀서함수 쓸때랑 중간에 한개 차이가 난다.

// state 값을 가져오려면 import 부분에는 스토어나, 슬라이스 둘 중 아무것도 필요하지 않고
// 대신에 useSelector만 임포트 해오면된다.
// 액션 생성자를 가져오려면 , 해당 이름으로 import 해와야 한다.

// 페이로드로 값이 넘어갈때 넘버를 해주는 것이 안전하다. 


  