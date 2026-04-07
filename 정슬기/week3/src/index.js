// const {add, sub} = require("./math"); //CJS

import mul, {add,sub} from "./math.js";
// import {add, sub} from "./math.js"; //ESM은 확장자 다 명시해줘야함.

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));
