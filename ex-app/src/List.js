import {useSelector} from "react-redux";
import { Outlet } from "react-router-dom";

export default function List(){
    // const nationImg=useSelecstor((state)=> state.nation.nationImage);
    // 유즈셀렉터는 화살표 형식인데, 스테이트가 화살표로 들어감
    return(
        <>
        <h1>먼치킨 갤러리</h1>
        </>
    );
}