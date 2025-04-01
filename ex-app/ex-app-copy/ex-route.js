import { useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate, useOutletContext, useParams } from "react-router-dom";



export default function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<List/>}></Route>
                <Route path="/write" element={<Write/>}></Route>
                <Route path="/list" element={<List/>}>
                    <Route path="/list/:id" element={<Read/>}>
                        {/* <Route path="/list/:id/update" element={<Update/>}></Route> */}
                    </Route>
                </Route>
            </Route>
        </Routes>
    </>
);
}

function Header(){
    const [arr,arrSet]=useState([
        {id:1, title:"제목1", writer:"박시현", body:"안녕하세요1"},
        {id:2, title:"제목2", writer:"박시현", body:"안녕하세요2"},
    ]);
    const [nextId,setNextId]=useState(arr.length+1);
    // 어디서 플러스 1을 해주느냐.. 라이트 하고 나서.
    let newObj;
    let fetch=(title, writer, body)=>{
        newObj={id:nextId, title, writer, body};
        setNextId(nextId+1);// 넘버 해야 되나?
        arr.push(newObj);
    };
    return(
        <>
            <h1>글 목록</h1>
            <hr/>
            <Link to ="/write">글쓰기</Link>
            &nbsp;
            <Link to ="/list">목록으로</Link>
            <hr/>
            <Outlet context={{arr,fetch,nextId,arrSet}}/>
        </>
    );
    }

function List(){
    const {arr,fetch,nextId,arrSet}=useOutletContext();
    const list=[];
    for(let a of arr){
        let part= <><Link to={`/list/${a.id}`}> {a.title} (작성자:{a.writer})</Link><hr/></>
        list.push(part);
    }
    // jsx에서 배열에는 태그를 그대로 넣어도 배열 자체가 표현식이 될때 각 객체마다 그 태그를 
    // 모두 표현해 준다.
    // 배열에 넣을 해당식을 쓸 때 태그는 그냥 쓰고 변수는 반드시 태그 밖{}형태로 써야 한다.
    // 원배열에서 가져온 것들은 모두 내려서 쓸 수 있고 반대로, 해당 배열들은 setState일때 저장된다.
    // 현재의 화면상 데이터들은 가상구조의 돔에서 서로 영향을 받아 나타난 데이터이다. 실제로 추가로 저장되고
    // 있는 것들은 setState뿐이다. 일시적인 저장값 변화는 각 컴퍼넌트 내에서의 변수의 변화, setParam이 있다.
    //네비말. 형식으로 연계되는 큰따옴표는 백틱의 성질과 같다.
    // js의 영역인가 아닌지에 따라 중괄호의 적용 여부를 달리하며, 이미 식안에서는 그냥 쓰고 태그 안에서는 jsx의 영역아래이므로 js식의 영역을
    // 만들기 위해 {}를 써준다. 여기서 "안"과 같으므로 문자열 성질로 되는 중이며, 문자열안에서도 변수의 값을 표시하려면 ${}가 된다.
    return(
        <>
           {list}
           <Outlet context={{arr,fetch,nextId,arrSet}}></Outlet>
        </>
    );
    }

function Write(){
    const {fetch}=useOutletContext();
    const navigate=useNavigate();
    //여러개를 전달할때는 위와 같이 모두 객체로 묶어 전달하고 객체분해 전달로 다시 원래대로 바꾼다.

    return(
        <>  <form name="formTag" onSubmit={(e)=>{
            e.preventDefault();
            fetch(e.target.title.value,e.target.writer.value,e.target.body.value);
            navigate("/")
        }}> 
                <input name="title" type="text"></input><br/>
                <input name="writer" type="text"></input><br/>
                <textarea name="body"></textarea><br/>
                <input type="submit" value="제출"></input>
            </form>
        </>
    );
    }

function Read(){
    const params=useParams();
    // 초장에 객체구조분해 해 버려서 변수를 쓰자
    // const{id}=useParams();
    const navigate=useNavigate();
    const{arr,nextId,arrSet}=useOutletContext();
    const readObj=arr.find((e)=>(e.id===Number(params.id)));
    // find가 언디파인이 남.
    // params는 객체화 됨. id로 parameter 변수명을 바꾸자. {id:1}// params.id로 접근, 변수명과 속성명이 결합한다고 치부하자.
    
    // 리드 오비제이로 새 객체 형성
    const [title,setTitle]=useState(readObj?readObj.title:"");
    // 타이틀 자체의 값이 변화될때 렌더링 하며, 연달아 기존 초기의 값도 연동하도록 title에 저장해놓자.
    // 이 값이 조금이라도 변하면 랜더링 되는 방아쇠가 된다.
    const [writer,setWriter]=useState(readObj?readObj.writer:"");
    const [body,setBody]=useState(readObj?readObj.body:"");
    // 3항 연산자로 없을시를 설정을 해줘야 한다. 뛰어넘을 수는 없다. 없으면 없는대로라도 값을 줘야 한다.
    if(!readObj){
        return;
    }
    //없으면, 언디파인등이면 그만 리턴하라고 하자.
    let newArr=[...arr];
    // 배열은 미리 기존의 상태값 배열을 다른 이름으로 생성해 놓는다.
    // 동일 주소도 피하고, 중간에 변경값이 생기는 것들에 대해서도 적용해야 하므로.
    // 지역변수로 만들면 소멸하니 이 위에 필요하다. 
    

    return(
        <>  <form name="formTag"> 
                <input name="title" type="text" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                    // 상태 값 함수에 현재 값이 들어간다고 해주자. 그러면 타이틀은 값이 변  하게 된다.
                    // 그때마다 온체인지가 발동이 되면서 이벤트안에서의 타이틀이 태그안의 타이틀에 영향을 준다.
                }}></input><br/>
                <input name="writer" type="text" value={writer} onChange={(e)=>{
                    setWriter(e.target.value);
                }} ></input><br/>
                <textarea name="body" value={body} onChange={(e)=>{
                    setBody(e.target.value);
                }}></textarea><br/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    for(let i=0; i< arr.length ; i++){
                        if(newArr[i].id===Number(params.id)){
                            newArr[i]={id:Number(params.id), title, writer, body};
                            break;
                        }
                    }
                
                arrSet(newArr);
                // 기존배열안에 새로운 배열의 값으로 대치해주며, 리렌더링을 유도한다.
                navigate("/");

                }}>수정</button>
                <button onClick={(e)=>{
                   e.preventDefault();
                   navigate("/");
                   const updateArr=newArr.filter((e)=>e.id!==Number(params.id))
                    //관계를 잘 유착하자.
                    //대괄호를 쓰려면 리턴이 필요하다.
                    arrSet(updateArr);

                }}>삭제</button>
            </form>
        </>
    );
}

// function UPdate(){

//     return(
//         <>

//         </>
//     )
// }





