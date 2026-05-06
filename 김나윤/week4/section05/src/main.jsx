import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
 <App />
  
);

// StrictMode는 개발 모드에서만 활성화되는 도구로, 자식 컴포넌트에서 잠재적인 문제가 있는지 감지해서 경고해주는 도구.

//리액트는 render메서드를 통해 컴포넌트를 렌더링함