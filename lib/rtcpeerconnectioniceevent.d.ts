import RTCIceCandidate from "./icecandidate";

declare class RTCPeerConnectionIceEvent {
  constructor(type: string, eventInitDict: { candidate: RTCIceCandidateInit })
  type: string
  value: RTCIceCandidateInit
}

export = RTCPeerConnectionIceEvent
