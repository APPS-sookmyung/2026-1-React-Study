//promise:비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등등의 기능을 함.
//3가지 상태: 대기(Pending)-아직 작업이 완료되지 않은 상태
//            성공(Fulfilled)-성공적으로마무리 ---> resolve
//            실패(Rejected)-비동기 작업이 실패한 상태 ---> reject

function add10(num){
    const promise = new Promise((resolve, reject) => {
        //비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {
            if(typeof num === 'number'){
                resolve(num + 10);
            }else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });
    return promise;
}


const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    return newP;

}).then((result) => {
    console.log(result);
    return add10(undefined);
})
.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});