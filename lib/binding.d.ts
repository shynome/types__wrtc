import EventTarget from "./eventtarget";

export class MediaStream extends EventTarget { }
export class MediaStreamTrack extends EventTarget { }
export class RTCAudioSink extends EventTarget { }
export class RTCAudioSource { }
export class RTCDataChannel extends EventTarget {
  send(data: any): void
}
export class RTCDtlsTransport extends EventTarget { }
export class RTCIceTransport extends EventTarget { }
export class RTCRtpReceiver { }
export class RTCRtpSender { }
export class RTCRtpTransceiver { }
export class RTCSctpTransport extends EventTarget { }
export class RTCVideoSink extends EventTarget { }
export class RTCVideoSource { }
export class getUserMedia { }
export class i420ToRgba { }
export class rgbaToI420 { }
export class setDOMException { }

declare class _RTCPeerConnection extends RTCPeerConnection {
  getReadyState(): any
}
export {
  _RTCPeerConnection as RTCPeerConnection
}

// RTCAudioSource,
// RTCRtpReceiver,
// RTCRtpSender,
// RTCRtpTransceiver,
// RTCVideoSource,
// getUserMedia,
// i420ToRgba,
// rgbaToI420,
// setDOMException