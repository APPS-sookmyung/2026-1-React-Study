import { useEffect } from "react";

const Even = ({ count }) => {
    useEffect(()=>{
        //클린업,정리함수: useEffect가 끝날 때 실행됨
        return() => {
            console.log("unmount");
        };
    },[]);
    return (
    <div>
        짝수입니다
    </div>       
  )};

export default Even;