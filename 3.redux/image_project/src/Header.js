import {useSelector} from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function Header(){
  
    const nationImg=useSelector((state)=> state.nation.nationImage);
    // 유즈셀렉터는 화살표 형식인데, 스테이트가 화살표로 들어감
    


    return(
        <>
        <div><Link to="/"><h1>국가 갤러리</h1></Link></div>
        {nationImg.map((img)=><Link to ={`/list/${img.id}`}><img key={img.id} src={img.src} width="200" height="200" id={img.id}></img></Link>)}
        {/* 여기서 유즈 네비게이터로 하여야 함. 이미지에 온클릭으로 */}
        {/* 이렇게 태그로 만들어 줄때는 중괄호 써서 공간 만들어 줄 것 */}
        <Outlet></Outlet>
        </>
    );
}