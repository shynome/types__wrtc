
declare class EventTarget {
  _listeners: { [k: string]: Set<any> }
  addEventListener(type: any, listener: any): void
  dispatchEvent(event: any): void
  removeEventListener(type: any, listener: any): void
}

export = EventTarget
