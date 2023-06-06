import { MessageDestination } from 'shared/messages'
import { reloadListener } from '../../build/plugins/extReload/listener'

reloadListener()

chrome.runtime.onMessage.addListener((message, _sender, cb) => {
  cb()

  if (message.destination === MessageDestination.cs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const [tab] = tabs

      if (tab && tab.id) {
        chrome.tabs.sendMessage(tab.id, message)
      }
    })
  }
})
