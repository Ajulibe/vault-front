import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'

import App from '@/pages/app/App'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <ToastContainer />
  </React.StrictMode>
)
