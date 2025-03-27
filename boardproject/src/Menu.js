export default function Menu(props){
  const menuLst=[];
  for(let m of props.menuList){// {menuList=[{id,title,mode}{}]}, onChangeMode()
    const item =<a style={{marginRight: '10px'}} key={m.id} href="/" onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(m.mode)
    }}>{m.title}</a>
    menuLst.push(item);
  }



  
  // 메뉴 조차 포문으로 돌리고 객체 속성을 작성하여 필요한 기능을
  // 입력받아 연동시킨다.

  return(
      <>
        {menuLst}
      </>
    );
  }
  // 부모에게 영향을 미치려면, 부모가 함수부에 매개변수를
  // 가지고 있어야 하며, 자식부의 함수에는 알맞은 매개변수를 
  // 넣어준다.
  // a태그는 키 속성을 요구한다.
  // 스타일 줄때는 객체로 줘야 함. 자바스크립트다{}+객체다{}
  // 이렇게 쌍으로 줘야 함.
  // 이름도 하이픈대신 대문자로 카멜로 이어서 씀
  // 하고 : '안에 값' 넣어줌.
