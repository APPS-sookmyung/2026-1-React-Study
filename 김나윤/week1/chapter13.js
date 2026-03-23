//콜백 함수: 자신이 아닌 다른함수에, 인수로써 전달된 함수를 의미함
// 뒷전에 실행되는

// 1. 콜백함수
//main함수가 언제든지 원하는 타이밍에 실행시킬 수 있다
function main(value) {
  value();
}

main(() => {
  //   console.log("i am sub");
});

// 2. 콜백함수의 활용
//겹치는 내용이 많은 함수 -> 콜백함수 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
