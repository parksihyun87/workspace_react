import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:"nation",
    initialState:{
    nationImage:[
        {id:1, src:"/media_nation/africa.jpg", desc:"africa"},
        {id:2, src:"/media_nation/brazil.jpg", desc:"brazil"},
        {id:3, src:"/media_nation/canada.jpg", desc:"canada"},
        {id:4, src:"/media_nation/cuba.jpg", desc:"cuba"},
    ]
    },
    // 안에다가 이런식으로 넣어야 함.    
    reducers:{

    onRead: (state,action)=> {
        // <Link to="/"></Link>
        // 클릭시 리듀서가 필요한가..?
        // 클릭시 가져와야 할 정보는 파람스의 정보 정도일듯 하다.
        // useParams로 경로 가져와서 해당 링크로 이동 생각
    }

    // onCreate:
    
    // onUpdate:
    
    // onDelete:
    }
});

export const {onRead}=counterSlice.actions;
// 이 부분은 슬라이스의 액션스 속성으로 들어가서 객체중에 온리드에만 내용 저장함.
// 객체 분해 할당, 해당 객체 속성만 분해하여 해당 변수에 할당하는 것.
// 해당 액션 생성자만 수출한다.

export default counterSlice;
// 슬라이스 전체를 보내놓아 여러곳에서 쓰기 편하게 보낼 것.



