import * as React from 'react'
import { nanoid } from 'nanoid/non-secure'

export type ModalsApi = ReturnType<typeof useModals>
export interface ModalItem { id: string, content: React.ReactNode }

export const useModals = () => {
  const [modals, setModals] = React.useState<ModalItem[]>([])

  return {
    modals,
    open,
    close,
  }

  function open(content: React.ReactNode, id: string = nanoid()): () => void {
    if (modals.find(x => x.id === id) == undefined) {
      setModals(state => [...state, { id, content }])
    }

    return () => close(id)
  }

  function close(id: string) {
    setModals(state => state.filter(x => x.id !== id))
  }
}

const Ctx = React.createContext<ModalsApi | undefined>(undefined)
export const Modals = {
  Provider: Ctx.Provider,
  useCtx() {
    const ctx = React.useContext(Ctx)
    if (ctx == undefined) {
      throw new Error('Must be wrapped within Modals.Provider')
    }
    return ctx
  }
}

type ModalApi = {
  id: string,
  idx: number
}
const ModalCtx = React.createContext<ModalApi | undefined>(undefined)
export const Modal = {
  Provider: ModalCtx.Provider,
  useCtx() {
    const ctx = React.useContext(ModalCtx)
    if (ctx == undefined) {
      throw new Error('Must be wrapped within Modal.Provider')
    }
    return ctx
  }
}

export const ModalContainer = () => {
  const { modals } = Modals.useCtx()

  return (
    <>
      {modals.map((x, idx) => (
          <Modal.Provider key={x.id} value={{id: x.id, idx}}>
            {x.content}
          </Modal.Provider>
      ))}
    </>
  )
}
