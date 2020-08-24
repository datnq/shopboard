import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from 'emotion-theming'
import { UnidataProvider } from '@datnq/unidata'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UnidataProvider initialData={{}}>
        <App />
      </UnidataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
