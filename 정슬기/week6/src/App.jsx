import './App.css'
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

/*임시데이터*/
const mockData=[
  {
    id: 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id: 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id: 2,
    isDone : false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData); /*여러 데이터 보관해야하기 때문에 초기값으로는 빈배열 넣어주기*/
  const idRef = useRef(3)

  const onCreate = (content)=>{
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    };

    /*객체 todos 배열에 추가*/
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetID와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? {...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const onDelete = (targetId) => {
    //인수: todos 배열에서 targetId와 일치하는 id 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=>todo.id !== targetId));
  }

  return (
    <div className = "APP">
     <Header />
     <Editor onCreate={onCreate}/>
     <List 
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
};

export default App
