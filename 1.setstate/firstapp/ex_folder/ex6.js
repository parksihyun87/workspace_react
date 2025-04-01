export default function App(){
    return( 
    <>
    <Counter></Counter>
    </>
    )
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



// 상태값 (state)
// 상태값이 변경되면 컴포넌트는 다시 렌더링 됨
// const [State, setState]=useState("Stat초기값");

// state값은 계속 그 값을 유지함
// state 도 setState도 변수임. state는 리턴값 저장,setSTate는 함수 저장.
// useState(0)이라는 곳에서 스테이트 값을 지정해 놓은 것부터 계수됨.
// 이 state는 카운터의 전용 값임. 값을 바꾸려면 두개를 같이 보내야 함.
// state 값은 계속 유지된다.
// state 값이 변경되면 다시 호출된다.(내용의 태그들이 다시 새롭게 렌더링 됨.)
// state 값은 객체도 들어갈 수 있다.
// useState엔터 눌르면(자동작성) 임포트가 자동으로 들어감.

