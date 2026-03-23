//연산자1
//연산자: 프로그래밍에서의 다양한 연산을 위한 기호, 키워드

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;


// 3. 복합 대입 연산자
//산술 연산자 + 대입 연산자가 복합되어있음
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;


// 4. 증감 연산자
//1씩 늘리거나 줄일 때 
let num8 = 10;
++num8; //전위연산
num8++; //후위 연산. 이 라인이 끝나고 나서야 1이 추가가 됨.

//예시
//let num8 = 10;
// console.log(num8++);
//-> 33번 라인에 와서야 1이 추가되기 떄문에 출력은 10.
//-> 해당라인에서 연산 적용하려면 num8 +=1 or ++num8


// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === "1";
// ==을 2개 쓰면 자료형까지 같은지는 비교가 안됨
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;