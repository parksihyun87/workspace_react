import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// 컨피겨 스토어와 카운터 슬라이스 들여옴

const store= configureStore({
    reducer: {
        nation: counterSlice.reducer
    }
});
// 콘스트 스토어 정의 후  콘피겨스토어 함수 안에
// 리듀서:객체 중괄호하고, 객체 네임: 슬라이스명.리듀서 하여 리듀서 및 스테이트 저장해 줌.

export default store;

// 스토어 수출