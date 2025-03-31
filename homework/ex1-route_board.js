import {Routes,Route,Link,Outlet,useParams,useNavigate} from 'react-router-dom';

function MainLayout(){
    return(
        <>
            <h2>게시판 앱</h2>
           <Link to="/post">목록</Link>
           {/* 링투는말*/}
           <hr/>
            <Outlet/>
            {/* 아웃렛도 리액트의 자녀인 컴퍼넌트다. */}
        </>
    );
}

const arr=[
        {id:1, title:"제목1", body:"표시할 내용 1"},
        {id:2, title:"제목2", body:"표시할 내용 2"},
        {id:3, title:"제목3", body:"표시할 내용 3"}
]

export default function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Post/>}></Route>
                    {/*루패는말,엘는중대 */}    
                    <Route path="/post" element={<Post/>}>
                        <Route path="/post/:params" element={<Board/>}></Route>
                    </Route>
                </Route>
            </Routes>
            {/* 상위에서 배열을 나눠줄 수도 있다. 아직 안배움*/}
        </>
);
}

function Post(){
    return(
        <>
            <ul>
                <li><Link to="/post/1">첫번째 게시글</Link></li>
                <li><Link to="/post/2">두번째 게시글</Link></li>
                <li><Link to="/post/3">세번째 게시글</Link></li>
            </ul>
            {/* 포문 사용 가능 */}
            {/* arr. */}
            <Outlet/>
        </>
    )
}

function Board(){
    // const [click,setClick]=useState(0);
    const {params}=useParams();
    const newObj=arr.find((e)=>(e.id===Number(params)));
    // (파인드,아이디,넘버함수)세개는 서로 엮인 관계임을 생각하자.
    // 객체에 들어있는 상태로 변환된 숫자를 파인드가 찾아오면 문자가 된다.
    const light=useNavigate();

    return(
        <>
            글 Id: {newObj.id} <br/>
            제목은 "{newObj.title}" 내용은 "{newObj.body}" 입니다.
            <br/>
            <button onClick={(e)=>{
                if(arr.length-Number(params)>0){
                    light(`/post/${Number(params)+1}`);
                    //네비말. 형식으로 연계되는 큰따옴표는 백틱의 성질과 같다.
                }else{
                    alert("진행 불가");
                }
            }}>다음 버튼</button>
        </>
    )
}

// index.js의 <App/>을 <BrowserRouter></>로 감싸고 임포트 받음.
// 루트의 임포트 받는 대상은 중괄호를 골격으로 써준다.