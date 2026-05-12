
const Viewer = ({ count }) => {
// Viewer 컴포넌트는 count 값을 구조분해할당으로 props로 받아서 화면에 렌더링함.
    return (
        <div>
            <div>
                현재 카운트 : 
            </div> 
            <h1>{count}</h1>

        </div>
    )
}

export default Viewer;