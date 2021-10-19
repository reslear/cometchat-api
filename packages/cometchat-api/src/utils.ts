import { ICometchatApiError } from './types'

export function isCometchatError(e: unknown): e is ICometchatApiError {
  return (e as ICometchatApiError).error !== undefined
}

export class CometchatApiError extends Error {
  error: ICometchatApiError['error']
  constructor(e: ICometchatApiError, status = 400) {
    super(e.error.message)
    this.error = e.error
    Object.setPrototypeOf(this, CometchatApiError.prototype)
  }
}
