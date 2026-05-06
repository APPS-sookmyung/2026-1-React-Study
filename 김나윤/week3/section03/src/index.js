// 내장함수 require()로 math.js 모듈을 불러오고 값 반환
// math.js 모듈에서 내보낸 객체를 math 변수에 할당
// const moduleData = require("./math"); 


// console.log(moduleData.add(1,2)); 
// console.log(moduleData.sub(1,2)); 

//구조분해할당
//const {add, sub} = require("./math"); 

// import mul from "./math.js";
// import {add, sub} from "./math.js";
// import mul, {add, sub} from "./math.js";

// console.log(add(1,2)); 
// console.log(sub(1,2)); 
// console.log(mul(2, 3));

import randomColor from "randomcolor";  //라이브러리에서 값을 가져올 때는 경로를 명시하는게 아니라 라이브러리 이름만 명시하면 됨
const color = randomColor();
console.log(color);