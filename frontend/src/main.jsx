import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RegistrationForm } from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* сюда будем подключать страницы */}
    <RegistrationForm />
  </StrictMode>,
)
