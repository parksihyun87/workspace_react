// 3항 연산자로 리턴값 조정하기.
// if문으로 홍창기 씨가 회원일때의 구문 값을 리턴하는 콤퍼넌트

// 컴퍼넌트가 리턴하는 값은 div같은 부모요소로 감싸기, class는 className="클래스명",
// 가져오기는 import.css도 link rel이 아니라 import+따옴표+경로: ./로 해줌. 반면에 밖으로
// 나가게 할 것은 ex로 다른 곳에 보냄. export+ 기본 default+ 보낼 앱 이름;
// 자바스크립트 식으로 변수 불러와야 하는 곳에 중괄호 사용.
// 리턴값에 3항 연산자를 사용하려면 중괄호로 시작해야 한다. 
// 3항 연산자의 트루 폴스 값에 각각 div로 감싸줘야 함.
// (물음표, 콜론(세미 아님)) 두가지로 구분.
// div style={style} 이런 식으로 표현. className
// 노드 js를 깔면 웹브라우저를 실행시키지 않아도 자바 스크립트가 실행이 됨.
// 마지막 빨간 부분을 넣으면 즉시 실행 함수를 킬수 있게 한다.
// export 외부로 제공, import 함수를 외부에서 가져옴
// props = properties, <Header title="환영합니다."
// 컴퍼넌트 호출은 태그를 열고 닫아 호출. 컴퍼넌트=태그를 리턴하는 함수
// 컴퍼넌트의 리턴값은 항상 앞뒤가 어떤 태그로 묶여 있는 관계이다.
// 컴퍼넌트 중에 렌더의 쓰임새와. 19/26?
// 부모컴퍼넌트(앱)가 불러온 컴퍼넌트가 자식컴퍼넌트 임.
// 부모 밑에 있을때 자식 컴퍼넌트는 부모가 전달해준 props값을 가지며, 그 지역 태그에서 그것을 표시해준다.
// <header title="환영합니다" body="REACT"> 등 객체 형태로 전달한다.
// 함수도 정의해서 변수로 가져다 줄 수 있다.
// 자녀 컴퍼넌트는 매개변수 소괄호에 props라는 단어를 써준다.
// 함
// 부모가 배열을 줄때는 리턴 영역 전에 배열을 정의하고,
// 부모 하 자녀 컴퍼넌트에서 속성이름={배열이름} 해준다.
// 함수는 메서드 형태로 속성.메서드 모양으로 써야 함.

// 이벤트 핸들러도 자식 컴퍼넌트 태그에서 정의 자체를 써줘야 함 
// 함수정의에 변수가 필요없으면 함수 정의부에 빈 칸을 쓰지만
// 함수정의에 변수가 필요하면 뭐라도 채워놓아 준다.

// 배열 구조 분해
// 배열로 받고 분해해서 가져옴.
// [x.y]=[1,2]; 각각 1,2
// [x,y]=[1]; 뒤는 언디파인.
// [x,,z]=[1,2,3]
// 컨알엔 누르면 찍힘(런 코드,코드러너)

