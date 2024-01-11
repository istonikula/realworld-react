import { ModalsApi } from '~/components/Modals.tsx'

let instance: ModalsApi | undefined = undefined

export function set(modals: ModalsApi) {
  instance = modals
}

export function get(): ModalsApi {
  return instance!
}