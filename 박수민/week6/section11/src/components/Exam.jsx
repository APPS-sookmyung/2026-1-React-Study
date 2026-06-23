import { useReducer } from "react"

//reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
    console.log(state, action)
    // if (action.type === "INCREASE") {
    //     return state + action.data
    // }
    // else if(action.type === "DECREASE") {
    //     return state - action.data
    // }

    //reduce 안에 액션 타입이 많아진다면 switch사용
    switch(action.type){
        case 'INCREASE': return state + action.data
        case 'DECREASE': return state - action.data
        dafault: 
        return state
    }
}

const Exam = () => {
    //diapatch : 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0)

    //버튼이 눌리면 state값을 1씩 증가
    //버튼이 눌렸을 때 dispatch 함수를 호출해서 상태를 요청
    const onClickPlus = ()=> {
        // 인수: 상태가 어떻게 변화되길 원하는지
        // -> 인수로 전달된 요청의 내용을 담고 있는 객체: 액션 객체
        // 액션 객체가 매개변수로 전달
        dispatch({
            type: "INCREASE",
            data: 1
        })
    }

    const onClickMinus =()=> {
        dispatch({
            type: "DECREASE",
            data: 1
        })
    }
    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}

export default Exam