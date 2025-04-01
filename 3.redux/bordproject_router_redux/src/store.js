import { configureStore } from "@reduxjs/toolkit";
import postListSlice from "./postListSlice";

const store= configureStore({
    // 컨피겨 스토어 해주고
    reducer:{
            postList: postListSlice.reducer,
    }
    // 리듀서들은, 포스트리스트해서, 슬라이스. 리듀서
});

export default store;