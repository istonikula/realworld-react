import { errorDialog } from '~/components/ErrorDialog.tsx'
import { GlobalModal } from '~/globals/index.ts'
import { isApiErrorHolder, tryParseErrorPayload } from '~/http/error-parser.ts'
import { ApiError, initApiErrorHandling } from '~/http/error.ts'

export function init() {
  initApiErrorHandling()

  window.addEventListener('error', e => handleError(e.error))
  window.addEventListener('unhandledrejection', e => handleError(e.reason))
}

export const handleError = _handleError(
  () => GlobalModal.get().open(errorDialog({ title: 'Session expired', text: 'Close dialog and go to sign in'})),
  () => GlobalModal.get().open(errorDialog({ title: 'Something went wrong 1', text: 'Try again after a while'}))
)

type OnError = (e: unknown) => unknown
type OnUnauthorizedError = () => unknown
const logger = '[ErrorHandler]'
function _handleError(
  defaultOnUnauthorizedError: OnUnauthorizedError,
  defaultOnError: OnError
) {
  return (
    e: Error,
    onUnauthorizedError: OnUnauthorizedError = defaultOnUnauthorizedError,
    onError: OnError = defaultOnError
  ) => {
    if (isApiErrorHolder(e)) {
      handleApiError(e.err, onUnauthorizedError, onError)
      return
    }

    console.error(logger, 'Unexpected error', e)
    onError(e)
  }
}

function handleApiError(e: ApiError, onUnauthorizedError: OnUnauthorizedError, onError: OnError) {
  switch (e.name) {
    case 'UnauthorizedError':
      onUnauthorizedError()
      return
    case 'GeneralApiError':
      const payload = tryParseErrorPayload(e)
      if (payload != undefined) {
        console.log(logger, 'Unexpected API error with payload', payload)
      } else {
        console.error(logger, 'Unexpected API error', e)
      }
      onError(e)
      return
    default:
      const _: never = e
      return _
  }
}
