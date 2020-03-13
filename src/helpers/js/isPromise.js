export const isPromise = obj =>
  typeof obj !== 'undefined' && typeof obj.then === 'function'
