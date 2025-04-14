import { useSelector } from 'react-redux';

export default function Payment() {
  const payArr= useSelector((state)=>(state.shopping.arr));
  let payment=0;
  for(let m of payArr){
    payment=payment+(m.price*m.number);
  }
    return (
      <>
        <h1>Total</h1>
        {payment}원
      </>
    );
  }




  // 마지막 출력.
// 정보에 접근하려면 유즈셀렉터가 그 영향 요소인데 영향력을 갖기 위해서는
// (임포트, 정의- 그것도 스테이트의 화살표 모양으로 정의/정스화-스슬이)두가지를 한 후 에 사용하고, 
// 액션생성자에게 접근하려면 (임포트로 그 액션생성자를 가져오고, 디스패치도 정의한후)에
// (둘이 묶어서 사용)이 두가지를 해야 한다.
// 임포트 @리덕스js/툴킷은 스토어에서 컨피겨스토어할때만 쓰이고, (유즈셀렉터,리액트+리덕스) 두가지이다.