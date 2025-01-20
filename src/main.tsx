import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/themeConfig.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >     
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>        
    </Provider>
  </StrictMode>,
)
