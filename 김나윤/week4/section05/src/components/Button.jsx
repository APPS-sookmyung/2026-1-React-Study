const Button = ({ children, text, color = "black" }) => {
    //이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button 
        onClick={onClickButton}
        //onMouseEnter={onClickButton}
        style={{ color : color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};


export default Button;

//기본값 설정
//props를 구조분해할당을 이용해 받아와야함 그리고 "balck"이라는 기본값 설정

//onClick={onClickButton} 에서 onClickButton()처럼 함수의 결과값을 주면 안됨