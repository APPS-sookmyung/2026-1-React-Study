//반복문(Loop, Iteration)
//->어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

for (let idx=0; idx <= 10; idx++){ //초기식(count 변수), 조건식; 증감식
    if(idx %2 == 0) {
        continue; //반복문에서 뒤의 내용 안보고 다음 회차로 진행됨
    }

    console.log(idx);

    if(idx >= 5) {
        break;
    }
} //1, 3, 5만 출력