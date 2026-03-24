//연산자(Operator)
//덧셈연산자, 곱셈 연산자, 뺄셈 연산자, 나눗셈 연산자...

// 1. 대입 연산자
let var1 = 1; //= : 대입 연산자

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; //곱셈이 덧셈보다 우선순위
let num7 = (1 + 2) * 20; //괄호 안이 우선순위
console.log(num6); //21
console.log(num7); //60

// 3. 복합 대입 연산자
let num8 = 10;
num8 += 20; //num8 = num8 + 20;
num8 -= 20; //num8 = num8 - 20;
num8 *= 20; //num8 = num8 * 20;
num8 /= 20; //num8 = num8 / 20;
num8 %= 10; //num8 = num8 % 10;
console.log(num8);

// 4. 증감 연산자
let num9 = 10;
console.log(num9++);
console.log(++num9); //이 라인에서 즉시 +1 (전위 연산)
num9++; //이 라인이 끝나고나서 +1 (후위 연산)
console.log(num9);

// 5. 논리 연사자
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
//==만 사용하면 자료형이 같은지는 구분되지 않음 (=== 써야만 자료형까지 비교 가능)
let comp1 = 1 === "1"; //동등 비교 연산자
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);