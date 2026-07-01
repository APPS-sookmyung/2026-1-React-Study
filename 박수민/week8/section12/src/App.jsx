import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary"; 
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// import Button from "./components/Button";
// import Header from "./components/Header";


// import { getEmotionImage } from "./util/get-emotion-image";


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

const mockData = [
  {
    id: 1,
    creadtedDate: new Date("2026-06-29").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    creadtedDate: new Date("2026-06-28").getTime(),
    emotionId: 2,
    content: "2번 일기 내용", 
  },
  {
    id: 3,
    creadtedDate: new Date("2026-05-15").getTime(),
    emotionId: 3,
    content: "3번 일기 내용", 
  }
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE': 
      return[action.data, ...state]
    case 'UPDATE':
      return state.map((item)=>
        String(item.id) === String(action.data.id) 
          ? action.data : item)
    case 'DELETE':
      return state.filter((item)=> String(item.id) !== String(action.id))
    default:
      return state
  }
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)


  // 새로운 일기 추가
  const onCreate = (createdData, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        creadtedDate,
        emotionId,
        content,
      },
    })
  }

  // 기존 일기 수정
const onUpdate = (id, createdDate, emotionId, content)=> {
  dispatch(
    {
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, content
      }
    }
  )
}
  // 기존 일기 삭제
const onDelete = (id)=>{
  dispatch({
    type: "DELETE",
    id,
  })
}

  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav('/new');
  // }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onDelete, onUpdate}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
  </>
  )
}

export default App;
