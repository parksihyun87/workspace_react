

export default function Write(props){// props는 밖으로 가져나갈 함수가 필요.
  
  return(
    <>
      <form onSubmit={(e)=>{
          e.preventDefault();
          const title=e.target.title.value;
          const body=e.target.body.value;
          const writer=e.target.writer.value;
          props.onChangeMode(title,body,writer);
        }}>
        <p><input name="title" type="text" style={{width:'60%', marginBottom: '10px'}}></input></p>
        <p><input name="writer" type="text" style={{width:'60%', marginBottom: '10px'}}></input></p>
        <p><textarea name="body"style={{width:'60%'}}></textarea></p>
        <input type="submit" ></input>
      </form>
    </>
  );
}

// css 나중에 적용해보기
// 접근하기 더 편한 경로로 진행해야 한다. 항상 위치를 생각할 것.
// writer 나중에 추가하기.

