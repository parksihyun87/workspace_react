
import { Routes,Route } from 'react-router-dom';
import Header from './Header';
import List from './List';

//이 그림들은 하나의 그림 객체임.

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}>
        {/*아래로 이동할 패스를 여기서 넣어서 식별자로 연결시킴 */}
        <Route path="/list/:relation" element={<List/>}></Route>
        {/* <Route path="/imglist/:param" element={<f/>}></Route> */}
        {/* 위에서 불러오는 것들에 대하여, 해당 엘레멘트에서 필요한 정보를 사용함 */}
      </Route>
    </Routes>
    </>
  );
}

// 눌르면 이미지가 변경. 
// 읽는 것만 만들고 실제로는 기능 다 구현하기.

// 슬라이스로 기능 구현 먼저 해보자.
// 후에 경로 정해서 나타내기.

