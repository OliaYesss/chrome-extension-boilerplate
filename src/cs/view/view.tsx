import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { App } from './components/App'
import { StyleSheetManager } from 'styled-components'

export function createView() {
  const dom = document.body.parentElement ?? document.body
  const host = document.createElement('div')
  const shadow = host.attachShadow({ mode: 'open' })
  const root = document.createElement('div')
  const styles = document.createElement('section')

  host.setAttribute('id', 'ext-root')
  dom.appendChild(host)
  shadow.appendChild(styles)
  shadow.appendChild(root)

  ReactDOM.render(
    <StyleSheetManager target={styles}>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleSheetManager>,
    root
  )
}
