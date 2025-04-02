import logo from './logo.svg';
import './App.css';
import africaImage from "./media_nation/africa.jpg"
import africaImage1 from "./media_nation/africa1.jpg"
import africaImage2 from "./media_nation/africa2.jpg"
import Header from './header';

//이 그림들은 하나의 그림 객체임.

function App() {
  const imageList=[
    {id:1, src:"/media_nation/africa.jpg", desc:"아프리카"},
    {id:2, src:"/media_nation/brazil.jpg", desc:"브라질"},
    {id:3, src:"/media_nation/canada.jpg", desc:"캐나다"},
    {id:4, src:"/media_nation/cuba.jpg", desc:"쿠바"},
    // 두 형식으로 둘 다 사용 가능.
    // 이미지가 속성이름으로 왔을때 그림이 그냥 들어감.
    // src를 객체로 묶어서 해당 배열에서 표현해도 되고(img로
    // 이미지를 이름을 주어 임포트 시키고 그것을 객체명으로 img src에서 불러다가 써도 됨.
  ];
  return (
    <>
    <h1>아프리카 갤러리</h1>
    {/* <img src={africaImage}></img> 이렇게도 표현이 됨*/}

    {imageList.map((img)=><img src={img.src} width="200" height="200" id={img.id}></img>)}
    {/* 온클릭시  */}
    </>
  );
}

// 눌르면 이미지가 변경. 
// 읽는 것만 만들고 실제로는 기능 다 구현하기.

// 슬라이스로 기능 구현 먼저 해보자.
// 후에 경로 정해서 나타내기.



export default App;
