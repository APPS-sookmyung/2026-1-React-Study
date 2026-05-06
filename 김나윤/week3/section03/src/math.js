// math 모듈


 export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

//commonjs 방식으로 내보내기
//객체 안에 프로퍼티 값으로 내보내고 싶은 함수를 넣어주면 됨
// module.exports = {
//   add, // value값과 키 값인 함수이름이 같으면 하나로 줄여서 작성 가능
//   sub,
// };    


//ES 모둘 방식으로 내보내기
//export {add, sub};

//하나의 모듈을 대표하는 defalut값으로 내보냄
//math.js 모듈을 대표하는 함수
export default function multiply(a, b) {
  return a * b;
}