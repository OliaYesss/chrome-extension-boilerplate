import { Message } from 'shared/messages'
import { createView } from './view/view'
import { MessageType } from 'shared/messages'
import { store } from './store/store'
import { popupSlice } from './store/popupSlice'

chrome.runtime.onMessage.addListener((message: Message, sender, cb) => {
  cb()

  if (message.type === MessageType.openPopup) {
    store.dispatch(popupSlice.actions.open())
  }
})

createView()
