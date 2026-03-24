// 1. 함수 표현식

function funcA(){
    //console.log("funcA");
}

let varA = funcA;
console.log(varA); //funcA 함수 자체가 출력됨
varA();

let varB = function () { //익명 함수
    //console.log("funcB");
};

varB();

//2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

// let varC = (value) => value + 1; //더 간단하게 적을 수 있음.

console.log(varC(10)); //11