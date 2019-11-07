
import *as _webrtc from "./binding";
import RTCSessionDescription from "./sessiondescription";

interface PortRange {
  min: number
  max: number
}

interface RTCExtralConfiguration {
  portRange: PortRange
  sdpSemantics: string
}

declare class RTCPeerConnection extends _webrtc.RTCPeerConnection {
  constructor(configuration?: RTCConfiguration & RTCExtralConfiguration)
}

export = RTCPeerConnection
