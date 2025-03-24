import logo from './logo.svg';
import './App.css';

function App() {
  const loginYn='Y';


  return(
    <>
    <div>
      {loginYn==='Y' && <div>홍창기입니다.</div>}
    </div>
    </>
  );}




// 3항 연산자로 리턴값 조정하기.
// if문으로 홍창기 씨가 회원일때의 구문 값을 리턴하는 콤퍼넌트

// 컴퍼넌트가 리턴하는 값은 div같은 부모요소로 감싸기, class는 className="클래스명",
// 가져오기는 import.css도 link rel이 아니라 import+따옴표+경로: ./로 해줌. 반면에 밖으로
// 나가게 할 것은 ex로 다른 곳에 보냄. export+ 기본 default+ 보낼 앱 이름;
// 자바스크립트 식으로 변수 불러와야 하는 곳에 중괄호 사용.
// 리턴값에 3항 연산자를 사용하려면 중괄호로 시작해야 한다. 
// 3항 연산자의 트루 폴스 값에 각각 div로 감싸줘야 함.
// (물음표, 콜론(세미 아님)) 두가지로 구분.
// 틀리면 안나오는 거



export default App;
