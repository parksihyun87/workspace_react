let x,y,z;
[x,y]=[1,2]
console.log(x,y);//1 2
[x,y]=[1];
console.log(x,y);// 1 undefined
[x,y]=[1,2,3];
console.log(x,y);// 1,2
[x,,z]=[1,2,3];
console.log(x,z);//1,3
// 한번 들어간 값도 값을 미대치하면 값 없어짐.

//기본값
[x,y,z=3]=[1,2];
console.log(x,y,z);//1,2,3
// 왼쪽에서 변수정의해 저장도 가능함, 언디파인 안뜸

[x,y=10,z=3]=[1,2];
console.log(x,y,z);//1,2,3
// 오른쪽 배열변수가 더 쎔.

//배열안의 내용을 왼쪽 일반 변수에 나눠담을 때 사용
// 배열배열