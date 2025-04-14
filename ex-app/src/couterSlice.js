import {createSlice} from "@reduxjs/toolkit";
const initState=[];
const counterSlice=createSlice({
    name: 'counter',
    //네임
    initialState:{
        wishList:initState,
        // 새로운 배열명: 기존 배열명 하면 대치가 된다고 한다. 
    },
    // 초기 상태
    reducers:{
        onSave: (state,action)=>{
            state.wishList.push({...action.payload});
            //{title:action.payload.title , id:action.payload.id}
            // 본래라면 push만 하면 렌더링이 일어나지 않는데, redux의 툴킷 작용으로 새로운 객체 생성의 영향을 미쳐 이루어진다고 함.
        },    
        onDelete:(state,action)=>{
            state.wishList=state.wishList.filter((e)=>( e.id!==action.payload.id));
            
        }
    }
});

export const {onSave,onDelete}=counterSlice.actions;
// 객체분해 할당으로 액션 생성자를  보내는 것이고, 이를 통해 디스패치로 액션의 타입을 객체로 받아서
// 해당 컴퍼넌트가 영향을 받게 된다.
export default counterSlice;
// 카운터 슬라이스는 안에 리듀서랑 액션생성자를 속성이름으로 가지고 있다. 리듀서를 위해서 카운터 슬라이스를 보낸다.