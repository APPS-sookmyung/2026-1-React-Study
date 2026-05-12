import { useEffect } from "react"
//even component가 언마운트되는 시점 제어

const Even = () => {
    useEffect(()=>{
        //콜백 함수가 반환하는 함수: 클린업, 정리함수
        //useEffect가 끝날 때 실행됨

        return () => {
            console.log("unmount")
        }
    }, [])

    return <div>짝수입니다</div>
}

export default Even