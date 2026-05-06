import './Main.css';


const Main = () => {

    const user = {
        name: '이정환',
        isLogin: true,
    };

    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    }
    else{
        return <div>로그인</div>
    }

    // return (    
    //     <>
    //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </> 
    //     );
};

export default Main;

//삼항연산자를 이용해서 이렇게 조건에 따라 다른 UI를 보여줄 수 있음

//cf. className은 html의 class속성과 동일한 역할을 하는 속성임
// 이유: class는 자바스크립트에서 이미 예약어로 사용되고 있기 때문에, 리액트에서는 class 대신 className이라는 속성을 사용함