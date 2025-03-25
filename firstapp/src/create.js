export default function Create(props){
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const title= e.target.title.value;
                const body=e.target.body.value;
                props.onCreate(title,body);
            }}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create"></input></p>
            </form>
        </article>
    );
}
// 이벤트 발생 서브밋으로
// e.preventdefault는 항상 세개다. ()까지
// 넘겨주는것 있음.
// 흐름을 개괄적으로 익혀야 함


//3,4//다시//1//다시//1