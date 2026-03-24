//콜백 함수: 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
//예시
// function main(value){
//     value();
// }
// function sub() {
//     console.log("sub");
// }

// main(sub); //callback 함수
//실행 결과 sub

//1. 콜백함수
function main(value) {
    // console.log(1);
    // console.log(2);
    value();
    // console.log("end");
}



main(() => {
    // console.log("i am sub");
}); //sub: callback 함수

//2.콜백 함수의 활용 -> 중복코드 제거하며 간결하게 코드 작성 가능
function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}


repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
})

repeat(5, (idx) => {
    console.log(idx * 3);
})
