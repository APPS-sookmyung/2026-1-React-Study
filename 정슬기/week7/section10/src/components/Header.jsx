import './Header.css';
import { memo } from "react";

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

export default memo(Header); //아래 두 줄 단축되어도 상관X

// const memoizedHeader = memo(Header) //props가 변경되지 않았을 때는 리렌더링되지 않도록

// export default memoizedHeader; //최적화가 이루어진 Header component 내보냄