//배열 : 여러개의 값을 "순차적으로" 담을 수 있는 자료형

//1.배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴(대부분 사용)

let arrC = [
  1,
  2,
  3,
  true,
  "hello",
  null,
  undefined,
  () => {}, //화살표 함수
  {}, //객체
  [], //배열
];

//2.배열 요소 접근
//배열은 순차적으로 값을 저장하기 때문에 각각의 원소에 번호로 접근할 수 있다.
let item1 = arrC[0]; //인덱스

let item2 = arrC[1];

arrC[0] = "hello"; // 배열 수정도 가능
