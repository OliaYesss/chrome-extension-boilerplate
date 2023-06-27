import { ExtReloadMessage } from './shared'

export namespace ExtReloadListener {
  export function init() {
    if (!process.env.PROD) {
      const ws = new WebSocket(`ws://localhost:${process.env.WS_RELOAD_PORT}`)

      ws.addEventListener('message', (event) => {
        if (event.data === ExtReloadMessage.change) {
          chrome.runtime.reload()
        }
      })
    }
  }
}
