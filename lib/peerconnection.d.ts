
import EventTarget from "./eventtarget";
import *as _webrtc from "./binding";
import RTCSessionDescription from "./sessiondescription";

declare class RTCPeerConnection<pc extends _webrtc.RTCPeerConnection = _webrtc.RTCPeerConnection> extends EventTarget {

  // NOTE(mroberts): This is a bit of a hack.
  ontrack: any

  _pc: pc
  canTrickleIceCandidates: pc['canTrickleIceCandidates']
  connectionState: pc['connectionState']
  currentLocalDescription: RTCSessionDescription
  localDescription: RTCSessionDescription
  pendingLocalDescription: RTCSessionDescription
  currentRemoteDescription: RTCSessionDescription
  remoteDescription: RTCSessionDescription
  pendingRemoteDescription: RTCSessionDescription
  signalingState: pc['signalingState']
  // pc['getReadyState']
  readyState: any
  sctp: pc['sctp']
  iceGatheringState: pc['iceGatheringState']
  iceConnectionState: pc['iceConnectionState']
  onconnectionstatechange: pc['onconnectionstatechange']
  ondatachannel: pc['ondatachannel']
  oniceconnectionstatechange: pc['oniceconnectionstatechange']
  onicegatheringstatechange: pc['onicegatheringstatechange']
  onnegotiationneeded: pc['onnegotiationneeded']
  onsignalingstatechange: pc['onsignalingstatechange']

  addIceCandidate: pc['addIceCandidate']
  addTransceiver: pc['addTransceiver']
  addTrack: pc['addTrack']
  close: pc['close']
  createDataChannel: pc['createDataChannel']
  createOffer: pc['createOffer']
  createAnswer: pc['createAnswer']
  getConfiguration: pc['getConfiguration']
  getReceivers: pc['getReceivers']
  getSenders: pc['getSenders']
  getTransceivers: pc['getTransceivers']
  getStats: pc['getStats']
  removeTrack: pc['removeTrack']
  setConfiguration: pc['setConfiguration']
  setLocalDescription: pc['setLocalDescription']
  setRemoteDescription: pc['setRemoteDescription']

}

export = RTCPeerConnection
