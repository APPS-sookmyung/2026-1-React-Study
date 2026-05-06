import { useState, useRef } from "react"// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register=()=>{

    const [name, setName]=useState("");

    const onChangeName = (e)=>{
        console.log(e)

    }

    return (
    <div>
        <input onChange={onChangeName} placeholder={"이름"} />

    </div>
    )
}

export default Register