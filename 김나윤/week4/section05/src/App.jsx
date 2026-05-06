
import './App.css'
import Register from './components/Register';
import HookExam from './components/HookExam';
///components/Header.jsx에서 jsx생략 가능
// 이유: 비트로 만든 리액트 앱에서는 확장자를 안써도 자동으로 파일을 찾아가도록 내부적으로 자동설정 되어 있음
// 그래서 es모듈시스템을 쓰지만 파일의 확장자까지 안 써도 됨




function App() {
  

  return (
    <>
      <HookExam />
    </>
  );
}

export default App

//html을 반환하는 함수를 컴포넌트라고 함
//여기선 App컴포넌트임

//이렇게 함수로 만든 컴포넌트를 리액트에서는 함수 컴포넌트라고 부름
// 함수선언식말고도 화살표 함수로 만들어도 됨
// function Header(){
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   )
// }
// 클래스로도 컴포넌트를 만들 수 있지만, 코드양이 많아져서 함수 컴포넌트가 더 대중적임


//컴포넌트 생성시 주의할 점
// 컴포넌트 이름은 대문자로 시작해야 함

//App컴포넌트를 렌더링 할 때 Header컴포넌트도 같이 렌더링됨 
//Header는 자식컴포넌트 , App은 부모컴포넌트라고도 불림
//결론: 리액트의 모든 컴포넌트들은 화면에 렌더링 되기 위해 App컴포넌트의 자식 컴포넌트로서 존재해야함
//즉, App컴포넌트는 최상위 조상이 되는 계층구조를 가지고, 루트 컴포넌트라고 함

//리액트의 컴포넌트들은 하나의 파일에 모아서 작성하기 보다 모듈화를 위해 컴포넌트별로 파일을 나눠서 작성하는게 더 일반적임
