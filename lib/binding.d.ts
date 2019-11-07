
declare class _MediaStream { }
interface _MediaStream extends MediaStream { }
export { _MediaStream as MediaStream }

declare class _MediaStreamTrack { }
interface _MediaStreamTrack extends MediaStreamTrack { }
export { _MediaStreamTrack as MediaStreamTrack }

export declare class RTCAudioSink { }
export declare class RTCAudioSource { }

declare class _RTCDataChannel { }
interface _RTCDataChannel extends RTCDataChannel {
  send(data: any): void
}
export { _RTCDataChannel as RTCDataChannel }

declare class _RTCDtlsTransport { }
interface _RTCDtlsTransport extends RTCDtlsTransport { }
export { _RTCDtlsTransport as RTCDtlsTransport }

declare class _RTCIceTransport { }
interface _RTCIceTransport extends RTCIceTransport { }
export { _RTCIceTransport as RTCIceTransport }

declare class _RTCRtpReceiver { }
interface _RTCRtpReceiver extends RTCRtpReceiver { }
export { _RTCRtpReceiver as RTCRtpReceiver }

declare class _RTCRtpSender { }
interface _RTCRtpSender extends RTCRtpSender { }
export { _RTCRtpSender as RTCRtpSender }

declare class _RTCRtpTransceiver { }
interface _RTCRtpTransceiver extends RTCRtpTransceiver { }
export { _RTCRtpTransceiver as RTCRtpTransceiver }

declare class _RTCSctpTransport { }
interface _RTCSctpTransport extends RTCSctpTransport { }
export { _RTCSctpTransport as RTCSctpTransport }

export declare class RTCVideoSink { }
export declare class RTCVideoSource { }
export declare class getUserMedia { }
export type i420ToRgba = any
export type rgbaToI420 = any
export type setDOMException = any

declare class _RTCPeerConnection { }
interface _RTCPeerConnection extends RTCPeerConnection {
  getReadyState(): any
}
export { _RTCPeerConnection as RTCPeerConnection }
