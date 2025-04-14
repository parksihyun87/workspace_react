import {createSlice} from '@reduxjs/toolkit';// @리제스/툴킷;


const counterSlice=createSlice({
    name:"shopping",
    initialState: {
        arr:[
            {id:1, title:"product A", price: 100, number:0 },
            {id:2, title:"product B", price: 200, number:0 },
            {id:3, title:"product C", price: 300, number:0 }
        ]}
        // 이니셜 스테이트는 리듀서 처럼 중괄호로 묶여있다.
        // 그안에 변수명: 변수값 넣는다.

        // {id:1, body:"내용1"},
    ,
    reducers: {
        onPlus: (state,action)=> {
            const pick=state.arr.find((e)=>(Number(action.payload) === e.id));
            pick.number++;
            // state의 값을 증가시켜 준다.
            // 파인드는 배열중 특정 객체나 값을 반환하지 새배열과는 관련없다.
        },
        onDelete: (state,action)=>{
            state.arr=state.arr.filter((e)=>(Number(action.payload) !== e.id));
            // 메서드에 새배열을 반환한다고 되어있는 것들은, 같은 배열에 다른 참조값을 적용시키게 하고
            // 그것으로 인해 리덕스는 배열의 변화를 알지 못하게 된다.
            // 새 배열을 반환하는 함수는 리덕스와의 교류를 위해, 자기자신의 변수에다가 다시 저장행위를 해준다.
            // 이렇게 새 배열을 반환하는 메서드는 (필터, 맵) 두가지 이다. 
        },
        onModify: (state,action)=>{
            for (let m of state.arr){
               if((Number(action.payload.id) === m.id)){
                m.number=action.payload.number;
                break;
               } 
            }
        }

        //for each(m=>{
        //    if(Number(action.payload.id) === m.id){
        //    m.number=action.payload.number;
        //    }});
        // 여기서 자기 스테이트를 가져오는 결합 모양은 (스.이름) 이다. 씨름
        // 특정 값만 찾아서 변경을 해주되, 새 배열을 반환하지 않으면 리덕스는 영향을 받는다.
        // 포이치나 포 오브를 써서 변경하고 빠지거나, 파인드로 직접 골라서 쓰면 좋은데,포이치는 멈추지 못하고 끝까지 모든 요소로 간다.
    
    }
});
export const {onPlus,onDelete,onModify}=counterSlice.actions;
export default counterSlice;
// 마지막 줄에서는 생성한 카운터 슬라이스를 디폴트를 설정하여 밖으로 보낸다.
// 액션생성자 만들고 다시 보내야 한다.카운터슬라이스쩜 액션스로 만들어서 보내야 한다.뒤에 이상한것 붙이지 말자.


// map,find는 리턴값이 있다. 

// 모양 자체는 객체이기전에 함수안에 넣는 것이며, 객체의 모양으로 쓰지만 설계도이므로 객체의 속성과는 일치하지 않는다.
// 필요) (네임:, initialState: , reducers:{객체로 묶인 리듀서 함수}) 3가지가 필요하며
// 리듀서 함수는 (on이름 , : , (state,action)=>{})3가지가 필요하다. 
// (state,action)에서 내 state 안을 지칭하려면, state.변수명, 가져온 action값을 지칭하려면 action.payload를 사용한다.
// 보내기는 두가지를 하며 (객체 분해와 명명으로 리듀서 함수 이름이 된 액션생성자, 슬라이스 묶음 자체 ) 두가지이다.
// 컴퍼넌트가 아니라 뒤에 ()를 가지고 함수로 쓰는 것들은 소문자로 시작한다.
// 네비게이트와 디스패치는 유즈를 하고 함수정의를 따로 해줘야 한다.



