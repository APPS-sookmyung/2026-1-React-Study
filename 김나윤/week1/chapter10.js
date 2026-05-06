//반복문

//for(초기식; 조건식; 증감식)
//초기식:반복문 내에서만 쓸 수 있는 변수를 초기화.  반복이 총 몇 번 진행되었는지 count하는 변수
//조건식: 언제까지 반복할건지? 조건식이 참일 때만 반복
//매 반복문 마다 conter 변수의 값을 증가시킴.

for (let idx = 0; idx < 10; idx++) {
  console.log(idx);
}

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
    // idx 가 짝수면 조건이 참이므로 continue문 수행
    // 반복문 내에 다른 코드들은 실행하지 않고 다음 반복 회차로 넘어감.
  }
  console.log(idx);

  if (idx >= 5) {
    //반복문 강제로 종료
    break;
  }
}
