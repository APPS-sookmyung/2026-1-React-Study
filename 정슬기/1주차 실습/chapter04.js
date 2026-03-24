//1. 변수 -> 언제든 값이 바뀔 수 있음.
//변수: 프로그램이 실행되는 도중에 계속해서 값을 바꿔가면서 저장할 수 있는 저장소
let age; //let: 변수 선언 , 변수 초기화
console.log(age);
age = 30;
console.log(age);

//2. 상수
//상수: 한 번 선언한 값은 다시 바꿀 수 없음. (초기화 필수)
const birth = "1997.01.07";

//3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없음.
// ex) let #name; -> error

//3-2. 숫자로 시작할 수 없다.(중간 혹은 끝에 사용 가능)
// ex) let 2name; -> error
// ex) let _1name; -> ok

//3-3. 예약어는 사용할 수 없다.
//예약어 ex) let, const 등
//let if -> error     let let -> error

//4. 변수 명명 가이드
 //변수명에 명확한 의미 X(누구도 알아볼 수 없는 이름으로 변수명 짓는 것 권장 X)
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;