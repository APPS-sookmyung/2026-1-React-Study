//단락 평가(Short-circuit Evaluation)
// function returnFalse(){
//     console.log("False 함수");
//     return false;
// }

// function returnTrue(){
//     console.log("True 함수");
//     return true;
// }
// console.log(returnFalse() && returnTrue());

//단락 평가 활용 사례

function printName(person){
    const name = person && person.name; //person이 False이면 person.name에 접근하지 않음
    console.log(name || "person의 값이 없음"); 
}

printName();
printName({name: "이정환"});

//T && T: 뒤에 T가 반환됨
//T || T: 앞에 T가 반환됨