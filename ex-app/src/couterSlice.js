import {createSlice} from "@reduxjs/toolkit";
const initState=[
        // {title:전국일주},
        // {title:해외일주},
        // {title:기타내용}
];
const counterSlice=createSlice({
    name: 'counter',
    //네임
    initialState:{
        wishList:initState,
        // 이렇게 땡땡으로 처리해도 된다고 한다.
    },
    // 초기 상태
    reducers:{
        onSave: (state,action)=>{
            state.wishList.push({...action.payload});
            console.log("action");
            console.log(action);
            console.log("payload");
            console.log(action.payload);
            console.log("{...action.payload}");
            console.log({...action.payload});
            //{title:action.payload.title , id:action.payload.id}
            // 기본으로 state는 보내고, action은 뭔가 받을 목적으로
            // 부가정보는.payload라고 쓴다.
            // 보내는 듯 하다.
            // state 다음은 초기변수의 이름 명.
            // state 안에 있는 것은 이니셜 스테이트 안에 있는 것이여야 함.
        },    
        onDelete:(state,action)=>{
            state.wishList=state.wishList.filter((e)=>( e.id!==action.payload.id));
        }
        // (액션생성자이름,콜론,띄어쓰기)하고 시작.
        // 스테이트는 내가 가진 초기 변수이고, 액션은 들어갈 타입이다.
        // 원래 상태 값은 막 못바꾸는데 리듀서에서는 바꿀 수 있는 모양이다.
    }
});
// 이 안에 3가지 요소를 넣는다.

export const {onSave,onDelete}=counterSlice.actions;
// 오른쪽에는 객체들, 왼쪽에는 개별 속성명, 슬라이스.액션스가 각 리듀서 함수이다.
// 객체분해로 변수할당, 액션생성자를 보내는 것이고, 이게 있어야 디스패치로 액션 타입을 객체를 받아서
// 해당 컴퍼넌트가 영향을 받을 수 있다.
export default counterSlice;

//.actions가 붙은 액션 생성자를 보낸후, .reducer 가 붙은 리듀서를 보내 리듀서 함수를 받게 한다.