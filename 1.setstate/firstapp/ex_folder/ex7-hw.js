


 function Nav(props){
    const lis=[];
    // 빈배열
    for(let i=0;i<props.topics.length;i++){
        let t=props.topics[i];
        lis.push(<li><a></a></li>
        )
        // 프롭스는 도큐임. 토픽스 속성이 배열값들임.
        
        props.onChangeMode(e.target.id);
    }

    return(
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>

    )
}
// 

export default function  App(){
    const topics=[
        {id:1, title:"title1"},
        {id:2, title:"title2"},
        {id:3, title:"title3"}
    ];

    return(
        <>
            <Nav topics={topics} onChangeMode={(id)=>{alert(id);}}></Nav> 
        </>
    );
}

// 변수 넣으면 변수가 얼럿으로 출력되는 함수정의
// 현재 토픽스 배열을 가져와서 가져다 줬엄