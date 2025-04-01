# useOutletContext넘기기
- 아울렛에 받은 애들을 공통으로 쓸 수 있다. 
- 직계만 쓸 수있다.

- 처음에 넘길때에는 context로 <Outlet context= {넘기려는 대상}> 이렇게 넘긴다. 
- 두번째 부터는 다시 const 변수명=useOutletContext() 해서 그 대상이 뭐든지 다시 받아준다. 그리고 다시 넘긴다. 

- 보드 프로젝트를 다 루트로 다시 만들기.

