import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PageMain } from '../src/components/styled'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageMain>
      <App />
    </PageMain>
  </React.StrictMode>,
)
