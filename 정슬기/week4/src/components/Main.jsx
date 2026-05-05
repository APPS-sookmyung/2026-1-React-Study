import "./Main.css";
//JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음.
//    if, for를 중괄호 내부에 넣으면 오류 발생
// 2. 숫자, 무자열, 배열 값만 정상적으로 랜더링 됨.
//    ex. true, undefined, null ->화면에 나오지 않음
//    객체 그대로 랜더링 불가
// 3. 모든 태그는 닫혀있어야 함.
// 4. 최상위 태그는 반드시 하나여야만 한다. (main tag 같은 아이)
//    빈태그로 묶어도 괜찮. JSX 문법상에서는 최상위 태그가 있다고 판단하지만
//    개발자 도구에서 보면 모든 요소들이 다 흩뿌려져있는 것을 확인 가능
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    };

    //if문
    if (user.isLogin) {
        return <div className = "logout">로그아웃</div>
    } else {
        return <div>로그인</div>;
    }


    //삼항 연산자
    // return (
    // <>
    //     {user.isLogin ? (
    //         <div>로그아웃</div>
    //     ) : (
    //         <div>로그인</div>
    //     )}
    // </>
    // );
};

export default Main;