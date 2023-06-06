import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { App } from './components/App'

export function createView() {
  const root = document.createElement('div')
  
  root.setAttribute('id', 'root')
  
  ;(document.body.parentElement ?? document.body).appendChild(root)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}
