import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo, useContext} from 'react';
import { TodoStateContext } from "../App";

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    //deps 값이 바뀌었을 때에만 콜백함수 다시 실행
    const {totalCount, doneCount, notDoneCount} = 
        useMemo(()=>{
            console.log("getAnalzedData 호출!");
            const totalCount = todos.length;
            //filter method 전체 배열 전부 다 순회
            const doneCount = todos.filter(
                (todo) => todo.isDone
            ).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount,
            };
    }, [todos]);
    //의존성배열: deps

    // const {totalCount, doneCount, notDoneCount} = getAnalyzeData()

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>

            <input 
                value={search} 
                onChange={onChangeSearch} 
                placeholder="검색어를 입력하세요" 
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem 
                            key = {todo.id} {...todo}/>
                    );
                })}
            </div>
        </div>
    );
};

export default List;