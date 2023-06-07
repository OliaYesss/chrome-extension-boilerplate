import { MessageDestination, MessageType } from 'shared/messages'

chrome.runtime.sendMessage(
  {
    type: MessageType.openPopup,
    destination: MessageDestination.cs
  },
  () => window.close()
)
