export enum MessageType {
  openPopup = 'openPopup'
}

export enum MessageDestination {
  cs = 'cs',
  bg = 'bg',
  popup = 'popup'
}

interface OpenPopupMessage {
  readonly type: MessageType.openPopup
  readonly destination: MessageDestination.cs
}

export type Message = OpenPopupMessage
