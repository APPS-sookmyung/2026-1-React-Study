import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import {useState, useEffect, useRef} from 'react'
//App component가 마운트 되었는지 안 되었는지 체크하는 변수 : usdRef
/*useState, useEffect Hook을 불러옴*/


function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const isMount = useRef(false)
  //아직 마운트되지 않았다 false

  // 1. 마운트 : 탄생
  useEffect(()=> {
    console.log("mount")
  }, [])


  // 2. 업데이트 : 변화, 리렌더링
  // 두 번째 인수인 deps 생략
  useEffect(()=> {
    if(!isMount.current){
      isMount.current = true
      return
    }
    console.log("update")
  })

  // 3. 언마운트 : 죽음




  // useEffect(()=>{
  //   console.log(`count: ${count} / input: ${input}`)
  // }, [count, input])
  // [count 배열은] 의존성 배열
  //dependency array -> daps
  //daps에는 값을 여러 개 넣어도 됨

  const onClickButton = (value) => {
    setCount(count + value)
  }
  
  return (
    <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <input
        vlaue={input}
          onChange={(e)=>{
            setInput(e.target.value)
      }}
      />
    </section>
    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
    </section>

    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  )
}

export default App
