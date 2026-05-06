// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; //...이 spread 연산자

//배열, 객체 다 사용 가능
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3);
}

funcA(...arr1); //arr1값을 각각의 매개변수에 흩뿌려줌. 

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수
// 아무리 매개변수가 많아도 배열에 한 번에 저장가능
//rest 매개변수는 항상 마지막에 위치해야함
//앞에 ...이 붙어야 rest 매개변수로 인식됨
//-> 이름 상관 없음
function funcB(one, two, ...rest) {
  console.log(rest);
}

funcB(...arr1);