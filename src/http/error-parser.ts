
import { ApiErrorHolder, GeneralApiError } from './error.ts'

interface ErrorPayload {
  error: string
}

export function isApiErrorHolder(e: Error): e is ApiErrorHolder {
  return e instanceof ApiErrorHolder
}

export function tryParseGeneralApiErrorPayload(e: Error): ErrorPayload | undefined {
  return (isApiErrorHolder(e) && e.err.name === 'GeneralApiError') ? tryParseErrorPayload(e.err) : undefined
}

export function tryParseErrorPayload(e: GeneralApiError): ErrorPayload | undefined {
  const data = e.cause.response?.data
  if (data == undefined) return undefined

  return data.hasOwnProperty('error') ? data as ErrorPayload : undefined
}
