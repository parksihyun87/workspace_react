
export default function Nav(props){//{topics:[...]},onChangeMode:(id)=>{alert(id);}
  const lis=[];
  for(let i=0; i<props.topics.length; i++){
    let t= props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);//t.id를 넘기면 1,2,3얼럿이 됨-나중개념 안중요.
    }}>{t.title}</a></li>);
    // 포문 반복할때 세개를 구분하게 해달라고 유니크키 콘솔 요청이 생김
  }
  // 세개가 생성이 됨.
  
  // 배열안에 객체가 있다. 이름은 토픽스.
  // 자바스크립트 코드를 만들려면 {}중괄호를 써야 함.
  // 일단 중괄호 변수 저장 활용하면 씀.
  // 온클릭은 클릭이 대문자. 이벤트 핸들러 등록. 매개변수 확인
  // 적용하는 함수의 모양 확인. 누른 타겟을 확인하려고 e.target을 사용
  // 리액트는 개발서버를 통해 요청이 들어가서 렌더링 되는 관계가 있는데.

  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>

  );
}