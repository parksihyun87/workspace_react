default props는 변수에 =하고 쓰나 쓸 일이 적다.

- 객체 구조 분해
const obj={f:whan, l:oh};
const{l,f}=obj
consoel.log(f,l); whanoh

const{prop:1,prop:2}={prop1:'a', prop2:'b'}
console.log(p1,p2);//'a' 'b'

const{prop1,porp2}={prop1:'a', prop2:'b'}
console.log(p1,p2);//'{prop1:'a', prop2:'b'}

function App(){
const 함수명=()=>{
    실행내용
};
return
    };
< button onClick={함수명}> 해도 실행이 된다.

상태 값이란 가상 돔(Virtual DOM)을 다시 렌더링하게 하는 값인데,
그렇게 되면 그 상태값을 소유한 컴퍼넌트와 자식 컴퍼넌트도 다시 렌더링 된다.

const[state,setS]=useState(0); 왼쪽 항은 배열이고, 유즈 스테이트는 함수다. 이렇게 [0,(e)=>{}] 둘이 저장된 것과 같다.
const 아예 변수값의 변경이 안 됨.
const arr=[1,2,3]; 이런경우는 배열의 참조값들이 저장된 것과 같다.
1000에서 1010까지 저장되면, 시작인 1000번지만 기억하고 있어서,
배열안에 구성요소가 추가나 변경이 가능하다.
반면에 const a=10; 이라면 한개의 변수는 변경이 가능하지 않다.

useState const안의 값도 변경 불가하다고 한다.

usereference라는 것을 쓰면 usestate처럼 실행하고나서 값은 계속 유지되면서 렌더링도 다시 일어나지 않는다.

함수의 작업을 예약만 하는 것이 비동기임. 해당 함수가 끝나면 
몇개의 상태값이 변하든 모아서 일시에 실행한다.
이미 만들어져 있는 유즈 스테이트는 다시 불러지더라도 초기화를 시키지는 않는다. 













