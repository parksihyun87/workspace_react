export default function ListAdd(props){//menuList={postList}, 함수 필요.
  const listNew=[];
  for(let m of props.menuList){
    let take=<><a id={m.id} href="./" onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);
    }
    }>{m.title}(작성자:{m.writer})</a><hr/></>;

    listNew.push(take);
    // m.속성이름 하면 값에 접근.
    // 두개 이상의 태그객체는 빈배열로 감싸줘야 함.
    // 여기서는 ={m.id}로 써야 됨.
    // 아이디로 설정되는 순간,
    // 숫자가 어떤 객체의 속성값으로 넘어가면 문자열로 성질이 변화함.
    
  }
  
  return(
    <>
      {listNew}      
    </>
  );
}

