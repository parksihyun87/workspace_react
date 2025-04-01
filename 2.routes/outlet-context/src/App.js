import logo from './logo.svg';
import './App.css';
import { useOutletContext,Outlet, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/parent" element={<ParentComponent/>}>
        <Route path="/parent/child" element={<ChildComponent/>}>
          <Route path="/parent/child/grandchild" element={<GrandchildComponent/>}>
          </Route>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

function ParentComponent() {
    const sharedData = "객체";
    return (
        <div>
            <h1>Parent Component</h1>
            <Outlet context={{ sharedData }} /> 
             {/* 데이터를 context로 전달 */}
             {/* 변수가 연결된 모양을 연관관계로 하여 객체모양이 진행됨 */}
        </div>
    );
}

function ChildComponent() {
  const { sharedData } = useOutletContext(); 
  // 상위 컴포넌트의 데이터를 받아옴
return (
      <div>
          <h2>Child Component</h2>
          <p>Data from Parent: {sharedData}</p>
          <Outlet context={{ sharedData }} /> 
      {/* GrandchildComponent를 렌더링할 Outlet */}
      </div>
  );
}

function GrandchildComponent() {
  const { sharedData } = useOutletContext(); 
  // 상위 컴포넌트의 데이터를 받아오는 함수이며 형태는 상관없음
  // 변수를 객체분해
  // 변수정의를 우항 객체의 속성이름으로 하면 속성값이 저장됨.
  // 콘스트 시에는 jsx문법 신경 안써도 됨.
return (
      <div>
          <h3>Grandchild Component</h3>
          <p>Data from Parent: {sharedData}</p>
      </div>
  );
}

export default App;
