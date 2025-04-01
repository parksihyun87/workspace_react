import {createSlice} from "@reduxjs/toolkit"
const initState=[
    { id: 1, title:"반갑습니다.", body:"Hello", writer:"김진아"},
    { id: 2, title: "안녕하세요", body: "안녕하세요", writer:"김진아"},
  ];
const postListSlice= createSlice({
    name: "postList",
    initialState:{    
        postList:initState,
        nextId: initState.length+1,
      // 둘이 동시 생성해서 렝쓰로는 못만듬
    },

    reducers: {
        onSave: (state,action)=>{
            state.postList.push({...action.payload, id: state.nextId});
            // 풀어 담음
            //
            state.nextId++;
        },

        onUpdate:(state,action)=>{
            for(let i=0; i<state.postList.length;i++){
                if(state.postList[i].id===action.payload.id)
                    //action.payload에는 전달받은 객체가 들어온다.
                break;
            }
        },

        onDelete:(state,action)=>{
            state.postList=state.postList.filter((post)=>post.id!==action.payload.id)
        }
    }
}
);

export const {onSave, onUpdate, onDelete} = postListSlice.actions;

export default postListSlice;