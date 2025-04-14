import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
//확인

const store = configureStore({
    reducer: {
    shopping: counterSlice.reducer
    }
});

export default store ;

// 콘스트 스토어 컨피겨스토어(함수임) 안에는 다시 개체의 형태로
// 3가지 결합 reducer: { 슬라이스네임: ~슬라이스.리듀서}
// reducer: , {}, 슬라이스네임:, ~슬라이스. , .리듀서 5개가 들어간다. 
// 모양 영향 관계를 잘 이해할 것.




