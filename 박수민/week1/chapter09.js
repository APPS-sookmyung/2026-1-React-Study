// 1. if 조건문 (if문)
let num = 9;

if (num >= 100) {
    // console.log("num은 10 이상입니다");
    // console.log("조건이 참 입니다.");
}   else if (num >= 5) {
    // console.log("num은 5 이상입니다");
}   else if (num >= 3) {
    // console.log("num은 3 이상입니다");
}   else {
    // console.log("조건이 거짓입니다");
}
//if로 시작해서 else로 끝나야함

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
    case "cat": {
    console.log("고양이");
    break;
}
    case "dog": {
    console.log("강아지");
    break;
}
    case "bear": {
    console.log("곰");
    break;
}
    case "snake": {
    console.log("뱀");
    break;
}
}