import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "./MHSlice";

export default function Main() {
    const currentUser = useSelector(state => state.MH.currentUser);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                {currentUser ? <><span>{currentUser.name}님</span><button onClick={(e) => {
                    dispatch(logout(currentUser.userId));
                }}>로그아웃</button></> : <Link to='/login'>Log-in</Link>}
            </div>
            <h1>문자히어로!</h1>
            <Link to='/header/phonebook'>연락처로</Link>&nbsp;&nbsp;
            <Link to='/header/message'>문자전송</Link>&nbsp;&nbsp;
            <Link to='/header/blacklist'>유해번호조회</Link>&nbsp;&nbsp;
            <Link to='/header/customize'>내 스타일</Link>&nbsp;&nbsp;
        </>
    )
}