// 1. 함수 표현식
function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function() {
    // console.log("funcB")
};

var8();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return calue + 1;
};

console,log(varC(10));