    function App(){
    function handleClick(){
        alert("버튼을 클릭했습니다.");
        }
    
        return <button onCLick={handleClick}>버튼클릭</button>;
    }
    
    export default App;




// <button> Hello </button>
// children은 Hello. 태그 사이에 있는내용

//return 


    function ControlButton({ message, children }){
    return <button onClick={() => 
    alert(message)}>{children}</button>;
    };
    

    function ControlPanel(){
    return (
    <>
    <ControlButton message="음악을 재생합니다."> play
    </ControlButton>
    <ControlButton message="재생을 중지합니다.">▣ Stop 
   </ControlButton>
    </>
    );

    };
    export default ControlPanel