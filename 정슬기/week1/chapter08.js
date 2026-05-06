// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기증
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //var1, var2 중에서 null, undefined가 아닌 값을 찾아서 var4에 할당
let var5 = var1 ?? var3;
console.log(var4); //10
console.log(var5); //20
let var6 = var2 ?? var3;
console.log(var6); //10 (둘다 null, undefined가 아닌 경우 첫번째 값을 출력)

let userName;
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;
console.log(displayName);

//2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

//3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

//요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 %2 === 0 ? "짝수" : "홀수";
//조건식, 참일때의 값, 거짓일 때의 값
console.log(res);