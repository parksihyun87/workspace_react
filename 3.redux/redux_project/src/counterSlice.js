import {createSlice} from "@reduxjs/toolkit"
// 크리에이트 슬라이스를 받아옴

const counterSlice=createSlice({
    name: "counter",
    initialState:{
        count:0,
    },
    // 카운터 슬라이스의 네임, 초기값 설정
    reducers:{
        increment: (state)=>{
            state.count+=1;
        },
        // 리듀서를 통해 액션생성자의 액션생성 내용을 확인
        decrement:(state)=>{
            state.count-=1;
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload;
            // +=연산자는 왼쪽의 값에 오른쪽 값을 더한후 다시 왼쪽에 저장함.
            // 액션.페이로드는 얻어온 값
        }
    }
}
);

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// 카운터슬라이스.액션스로 기본 객체 형태들이 되어있음. 저
// 각 액션생성자를 수출함. = 카운터슬라이스.액션스;
// 액션즈에 들어가있어서 객체 생성으로 저장
export default counterSlice.reducer;
// 기본적으로는 카운터 슬라이스의 리듀서를 수출함.(x 카운터 슬라이스를 수출함.)




