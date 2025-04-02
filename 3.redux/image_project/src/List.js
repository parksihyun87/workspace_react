import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

    // nationImage:[
    //     {id:1, src:"/media_nation/africa.jpg", desc:"africa"},
        // {id:2, src:"/media_nation/brazil.jpg", desc:"brazil"},
        // {id:3, src:"/media_nation/canada.jpg", desc:"canada"},
        // {id:4, src:"/media_nation/cuba.jpg", desc:"cuba"},
    // ]
    // params는 1,2,3 형태로 받게 됨


export default function List(){
    // const nationImg=useSelector((state)=> state.nation.nationImage);
    // 유즈셀렉터는 화살표 형식인데, 스테이트가 화살표로 들어감
    const nations=useSelector((state)=>(state.nation.nationImage));
    // 스테이트.슬라이스 네임.이니셜스테이트하이름
    // 배열에 각 이미지가 들어가있음
    const {relation}=useParams();
    // 현재 :relation 형태로 가져왔다.
    // useParams()는 객체의 형태로 자료를 저장했으며, {':뒤의이름':파람스 값}으로 가져오므로, 객체분해를 연동시키도록 한다.
    // for문으로 desc+숫자증가+.jpg만들기
    //
    const newSrc=[]
        for(let i=0;i<3;i++){
           newSrc.push(<img src={"/media_nation/"+ nations[relation-1].desc+(i+1)+".jpg"}/>);
        // js에서는 태그로 시작하는 객체를 넣어 주어도 괜찮다. = 뒤에는 {} 중괄호를 쓰면서 jsx상에서 태그안을 써서 적용하는 방식으로 작성하여야 한다.

        };
        // 강사님은 이미지아이디와 같은 걸로 파인드 돌리심. src 문자열을 가져와서 split .기준으로 스플릿하면 0,1번에 배열로 들어감.(기준자는 없어짐)
        // 이러면 알맞은 파일 경로명이 조합됨.

    return(
        <>
        <div>
            {newSrc}
        </div>
        </>
    );
}