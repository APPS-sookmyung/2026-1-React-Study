import { prerenderToNodeStream } from 'react-dom/static'
import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react'

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = ()=> {
        if(search === "") {
            return todos
        }
        return todos.filter((todo)=>
            todo.content.toLowercase().includes(search.toLowerCase())
    )
    }
    const filteredtodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요" />
            <div className='Todos_wrapper'>
                {filteredtodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}  />
                })}
            </div>
        </div>
    )
}

export default List