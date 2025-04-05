import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [arr,setArr]=useState([
    {id:1, title:"설날인사", body:"새해 복 많이 받으세요"},
    {id:2, title:"추석인사", body:"즐거운 추석 되세요."},
  ]);
  let newArr=[...arr];
  const [nextId,setNextId]=useState(arr.length+1);
  const [selectT,setSelectT]=useState("");

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif", width:"1000px", margin:"0px auto" },
    header: { border: "1px solid black", padding: "10px", textAlign: "center" },
    content: { display: "flex", gap: "20px" },
    box: { flex: 1, border: "1px solid black", padding: "10px", overflowX: "auto", overflowY: "auto" },
    input: { display: "block", width: "100%", margin: "10px 0" },
    textarea: { display: "block", width: "100%", height: "80px", margin: "10px 0" },
    button: { display: "block", width: "100px", marginTop: "10px" },
    link: { textDecoration: "none", color: "blue" },
  };

  console.log(selectT);
  return ( 
      <div style={styles.container} >
        <header style={styles.header}>내 스타일 만들기</header>
        <div style={styles.content}>
          {/* 왼쪽 입력 폼*/}
          <div style={styles.box}>
            <h3>내 스타일 만들기</h3>
            {/* 추가폼 */}
            {/* <form onSubmit={(e)=>{
              e.preventDefault();
              arr.push({title:e.target.title.value, body: e.target.body.value});
              setNextId(nextId+1);
            }}>
              <input name="title" type="text" placeholder="Input text" style={styles.input} />
              <textarea name="body" placeholder="Textarea" style={styles.textarea} />
              <button type="submit" style={styles.button}>추가</button>
            </form> */}

            {/* 읽기,수정,삭제폼 */}
            <form>
              <input name="title" type="text" value={selectT.title} placeholder="Input text" style={styles.input} onChange={(e)=>{
                setSelectT({...selectT,title:e.target.value});
              }} />
              <textarea name="body" value={selectT.body} placeholder="Textarea" style={styles.textarea} onChange={(e)=>{
                setSelectT({...selectT,body:e.target.value});
              }} />
              <button type="submit" style={styles.button} onClick={(e)=>{
                e.preventDefault();
                
                for (let i = 0; i < newArr.length; i++) {
                  if (newArr[i].id === Number(selectT.id)) {
                    newArr[i] = {
                      id: Number(selectT.id),
                      title:selectT.title,
                      body: selectT.body
                    };
                    break;
                  }
                }
                setArr(newArr);
              }}>수정</button>
              <button type="submit" style={styles.button} onClick={(e)=>{
                e.preventDefault();
                newArr=newArr.filter((e)=>(e.id!==Number(selectT.id)));
                console.log("newArr");
                console.log(newArr);
                setArr(newArr);
                console.log("arr");
                console.log(arr);

              }}>삭제</button>
            </form>
          </div>

          {/* 오른쪽 리스트 */}
          <div style={styles.box}>
            <h3>내 스타일</h3>
            <ul>
              {arr.map((item, index) => (
                <li key={index} onClick={((e)=>{
                  setSelectT({id:item.id,title:item.title,body:item.body})
                })}>
                  <a href="#" style={styles.link}>{item.body}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
  );
};
export default App;