// 함수
// function greeting () {
//     console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting(); //함수 호출, () 꼭 작성해야함.
// console.log("호출 후");

//직사각형 넓이 구하는 함수


let area1 = getArea(10, 20); //10, 20: 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

//함수 호출보다 선언이 뒤에 있어도 정상 작동함
//호이스팅
// -> 끌어올리다 라는 뜻 (최상단으로 끌어올려줌)
function getArea (width, height) { //width, height: 매개변수
    function another() { //중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;

    return area; //area값 반환 (반환값: 함수 호출의 결과값)
}