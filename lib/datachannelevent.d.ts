
declare class RTCDataChannelEvent {
  constructor(type: string, eventInitDict: { channel: RTCDataChannelEvent })
  bubbles: boolean
  cancelable: boolean
  type: string
  channel: RTCDataChannelEvent
}

export = RTCDataChannelEvent
