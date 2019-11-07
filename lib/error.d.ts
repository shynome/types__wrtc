
/**
 * 和标准实现的接口不同
 */
declare class RTCError {
  name: string
  message: string
  constructor(
    code: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
    message?: string,
  )
  reasonName: [
    // These strings must match those defined in the WebRTC spec.
    'NO_ERROR', // Should never happen -- only used for testing
    'INVALID_CONSTRAINTS_TYPE',
    'INVALID_CANDIDATE_TYPE',
    'INVALID_STATE',
    'INVALID_SESSION_DESCRIPTION',
    'INCOMPATIBLE_SESSION_DESCRIPTION',
    'INCOMPATIBLE_CONSTRAINTS',
    'INTERNAL_ERROR'
  ]
}

export = RTCError
