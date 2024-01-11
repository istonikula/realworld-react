import { cx } from 'class-variance-authority'

import { Modal, Modals } from './Modals.tsx'

export function errorDialog(props: ErrorDialogProps) {
  return <ErrorDialog {...props} />
}

interface ErrorDialogProps {
  title: string
  text: string
}
export function ErrorDialog(props: ErrorDialogProps) {
  const ms = Modals.useCtx()
  const m = Modal.useCtx()

  const close = () => ms.close(m.id)

  return (
    <div className={`relative z-${100+m.idx}`}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel */}
          <div className="mx-auto px-4 pb-4 pt-5 max-w-sm rounded bg-white text-center">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{props.title}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{props.text}</p>
            </div>
            <div className="mt-4">
              <button className={btn} onClick={close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const btn = cx([
  'rounded',
  'border border-transparent',
  'py-2 px-4',
  'text-sm font-medium',
  'text-white',
  'bg-[#5cb85c]',
  'hover:bg-[#419641] hover:border-[#449d44]',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#419641] focus-visible:ring-offset-2'
])
