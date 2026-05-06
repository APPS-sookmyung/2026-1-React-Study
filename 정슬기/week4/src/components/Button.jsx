//구조 분해 할당 방식으로 오류 해결
//구조 분해 할당 문법에서 기본값 문법을 이용하여 플옵스의 기본값을 설정해주면 됨.
const Button = ({ children, text, color = "black" }) => {
    //이벤트 객체
    //SyntheticBaseEvent: 매개변수 e에 저장된 event 객체
    //합성 이벤트(Synthetic Base Event): 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
    //Cross Browsing Issue:브라우저 별 스펙이 탈라 발생하는 문제
    //->해결법: 합성이벤트(통일된 규칙, 일종의 통합 규격을 만들어놓음)
    //브라우저별로 이벤트가 다른 것 신경 쓸 필요 사라짐.
    const onClickButton = (e)=> {
        console.log(e);
        console.log(text);
    }
    
    return (
        //이벤트 핸들러
    <button 
    onClick = {onClickButton}
    // onMouseEnter = {onClickButton}
    style = {{color : color}}>
        {text} - {color.toUpperCase()}
        {children}
    </button>
    );
};

export default Button;