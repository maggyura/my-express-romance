import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { LoginForm } from './Login.jsx'
import { Register } from './Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* here insert pages */}
      {/* <LoginForm /> */}
    <Register />
  </StrictMode>,
)
