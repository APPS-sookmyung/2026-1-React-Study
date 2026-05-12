import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import {useState, useEffect, useRef} from "react"; /*section7 useEffect 추가*/

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(""); //section7 추가

  //mount~unmount: section7 라이프사이클 제어
  const isMount = useRef(false); //아직 마운드 되지 않았다. //section7 useEffect로 라이프사이클 제어
  //1. 마운트 : 탄생
  //마운트 되었을 때만 최초로 한 번 실행
  useEffect(()=>{
    console.log("mount");
  }, []);

  //2. 업데이트 : 변화, 리렌더링
  //update가 일어날 떄마다 계속 실행
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return; //강제 종료
    }
    console.log("update"); //리렌더링 되어 다시 호출 될 떄 실행
  });

  //3. 언마운트 : 죽음 ->화면에 나타났다가 사라지는 것이 필요함.


  // /*section7 useEffect 추가*/
  // useEffect(()=>{
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]); /*count값이 바뀔 때마다 앞에 있는 callback함수 실행시킴*/
  // //의존성 배열(dependency array, deps)

  /*value: button 값을 받음(-10,10 등)*/
  const onClickButton = (value) => {
    setCount(count + value);
    //console.log(count); //이렇게 실행하면 안될까? 안됨. 변경되기 이전의 값을 출력함. setCount는 비동기로 동작하기 떄문.->useEffect 사용하여 변경된 값 바로바로 이용하기
  };

  return (
  <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value)
      }} />
    </section>

    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
    </section>
    
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
  </div>
  );
}

export default App;
