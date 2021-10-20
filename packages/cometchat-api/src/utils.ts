import { ICometchatApiError } from '.'

export function isCometchatApiError(e: unknown): e is ICometchatApiError {
  return (e as ICometchatApiError).error !== undefined
}
