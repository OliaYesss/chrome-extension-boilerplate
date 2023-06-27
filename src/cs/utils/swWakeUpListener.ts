import { isIframe } from './common'

export namespace SwWakeUpListener {
  const TIMEOUT = 2000

  export function init() {
    if (!isIframe() && !process.env.PROD) {
      const connect = chrome.runtime.connect()

      connect.onDisconnect.addListener(() => {
        setTimeout(() => {
          if (chrome.runtime.id) {
            init()
          }
        }, TIMEOUT)
      })
    }
  }
}
