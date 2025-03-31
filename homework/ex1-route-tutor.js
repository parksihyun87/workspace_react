import {Routes,Route,Link,Outlet,useParams,useNavigate, useOutletContext} from 'react-router-dom';



function MainLayout(){
    
    
    const arr=[
            {id:1, title:"제목1", body:"표시할 내용 1"},
            {id:2, title:"제목2", body:"표시할 내용 2"},
            {id:3, title:"제목3", body:"표시할 내용 3"},
    ]

    return(
        <>
            <h2>게시판 앱</h2>
           <Link to="/post">목록</Link>
           {/* 링투는말*/}
           <hr/>
            <Outlet context={arr}/>
            {/* 아웃렛도 리액트의 자녀인 컴퍼넌트다. */}
            {/* 명령어는 OUtlet에서 context */}
        </>
    );
}


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

        </>
);
}

function Post(){
    
const arr=useOutletContext();

    return(
        <>
            <ul>
                <li><Link to="/post/1">첫번째 게시글</Link></li>
                <li><Link to="/post/2">두번째 게시글</Link></li>
                <li><Link to="/post/3">세번째 게시글</Link></li>
            </ul>
            {/* 포문 사용 가능. 포문시에는 li에도 키를 넣어주자. */}

            <Outlet context={arr}/>
            {/* map을 사용해서 새 배열을 만들어도 된다.
            postlis.map(post)=>liket post.id
            map은 새배열을 리턴하는 결과이므로 이렇게 한다.
            */
            
            }
        </>
    )
}

function Board(){
    // const [click,setClick]=useState(0);
    const {params}=useParams();
    const arr=useOutletContext();
    // 동일 변수명 가능?
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
                if(3-Number(params)>0){
                    light(`/post/${Number(params)+1}`);
                    //네비말. 형식으로 연계되는 큰따옴표는 백틱의 성질과 같다.
                    // js의 영역인가 아닌지에 따라 중괄호의 적용 여부를 달리하며, 이미 식안에서는 그냥 쓰고 태그 안에서는 jsx의 영역아래이므로 js식의 영역을
                    // 만들기 위해 {}를 써준다.
                }else{
                    alert("진행 불가");
                }
            }}>다음 버튼</button>
        </>
    )
}
