import axios, { AxiosError }  from 'axios'

export class GeneralApiError extends Error {
  public readonly name = 'GeneralApiError'
  constructor(readonly cause: AxiosError) {
    super(cause.message)
  }
}

export class UnauthorizedError extends Error {
  public readonly name = 'UnauthorizedError'
  constructor() {
    super('Unauthorized')
  }
}

export type ApiError = GeneralApiError | UnauthorizedError

export class ApiErrorHolder extends Error {
  public readonly name = 'ApiErrorHolder'
  constructor(readonly err: ApiError) {
    super(err.message)
  }
}

export function initApiErrorHandling() {
  axios.interceptors.response.use(
    response => response,
    err => Promise.reject(new ApiErrorHolder(toApiError(err))),
  )
}

function toApiError(err: AxiosError): ApiError {
  if (!err.response) {
    return new GeneralApiError(err)
  }

  switch (err.response.status) {
    case 401:
      return new UnauthorizedError()
    default:
      return new GeneralApiError(err)
  }
}
