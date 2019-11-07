
declare class RTCDataChannelEvent<D = any> {
  constructor(type: string, eventInitDict: { channel: D })
  bubbles: {
    value: boolean
  }
  cancelable: {
    value: boolean
  }
  type: {
    value: string,
    enumerable: boolean
  }
  channel: {
    value: D
    enumerable: boolean
  }
}

export = RTCDataChannelEvent
