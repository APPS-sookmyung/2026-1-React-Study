import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// 인수로 전달받은 요소를 리액트의 루트로, 즉 뿌리로 만들어주는 역할을 함
