import "./App.css"
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  
  //이벤트 헨들러, 
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        {/* 컨트롤러 컴퍼넌트에게 이벤트 헨들러를 props로 전달 */}
        <Controller onClickButton={onClickButton} /> 
        
      </section>
    </div>
  )
}

export default App
