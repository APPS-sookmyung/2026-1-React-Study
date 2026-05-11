import { useState } from "react";

const Controller = ({ onClickButton }) => {

    const [count, setCount] = useState(0);

    const onClick = () => {
        // count += 1; // 이렇게 하면 안됨
        // useState를 사용하여 count 값을 업데이트해야 함
        setCount(count + 1);

    }
    return(
        <div>
            <button onClick={() => onClickButton(-1)}>-1</button>
            <button onClick={() => onClickButton(-10)}>-10</button>
            <button onClick={() => onClickButton(-100)}>-100</button>
            <button onClick={() => onClickButton(100)}>+100</button>
            <button onClick={() => onClickButton(10)}>+10</button>
            <button onClick={() => onClickButton(1)}>+1</button>
        </div>

    )
}

export default Controller;