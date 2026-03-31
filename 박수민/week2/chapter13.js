function add10(num){
    const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // excutor

    setTimeout(() => {
        const num = null;

        if (typeof num === "number") {
            resolve(num+10);
        }   else {
            reject("num이 숫자가 아닙니다");
        }
        
    }, 2000);
    
});

return promise;
}


const p = add10(0);
p.then((result) => {
    console.log(result);
    return add10(result);
    
    const newP = add10(result);
    return newP;
}).then((result) => {
    console.log(result);
});






// // then 메서드
// // -> 그 후에 

// promise.then((value)=>{
//     console.log(value);
// });

// promise.catch((error)=>{
//     console.log(error);
// });


// // setTimeout(() => {
// //     console.log(promise);
// // }, 3000);