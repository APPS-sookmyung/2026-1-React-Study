import "./App.css"
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. 마운트 : 탄생
  // 빈 배열을 넣어주면 마운트 될 때만 실행됨, 업데이트 될 때는 실행되지 않음
  useEffect(() => {
    console.log("mount");
  } , []); 
  
  //2. 업데이트 : 변화,리렌더링
  // 의존성 배열(deps)이 없으면 마운트 될 때도 실행되고 업데이트 될 때도 계속 실행됨
  //진짜 업데이트 단계에서만 실행하도록 하려면 Refernce객체를 사용
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    } 
    console.log("update");
  }); 

  //3. 언마운트 : 죽음

  // -> 세가지 모두 useEffect로 표현 가능
//   useEffect(() => {
//     console.log(`count : ${count}, input : ${input}`);
  
//   }, [count, input]); // count state값이 변경될 때마다 첫번째 인수인 콜백함수를 실행시킴
// //의존성 배열 dependency array -> deps
  
  //이벤트 헨들러, 
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input  
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0?  <Even/>: null}
      </section>

      <section>
        {/* 컨트롤러 컴퍼넌트에게 이벤트 헨들러를 props로 전달 */}
        <Controller onClickButton={onClickButton} /> 
        
      </section>
    </div>
  )
}

export default App
