import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import * as errorHandling from './error-handling'
import { App } from './App.tsx'
import './index.css'
import './bs.css'

errorHandling.init()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
