import * as React from 'react'
import { signal } from '@preact-signals/safe-react'

import { Login, NewUserRegistration, User } from './user.ts'
import { UserService } from './ports.ts'

export function createStore(userSrv: UserService) {
  const user = signal<User | undefined>(undefined)
  const loading = signal(false)

  const registerUser = (reg: NewUserRegistration): Promise<User> =>
    userSrv.register(reg).then(u => {
      user.value = u
      return u
    })

  const login = (login: Login): Promise<User> =>
    userSrv.login(login).then(u => {
      user.value = u
      return u
    })

  return {
    loading,
    user,

    registerUser,
    login
  }
}

const Ctx = React.createContext<ReturnType<typeof createStore> | undefined>(undefined)
export const Store = {
  Provider: Ctx.Provider,
  useCtx() {
    const ctx = React.useContext(Ctx)
    if (ctx == undefined) {
      throw new Error('Must be wrapped within Store.Provider')
    }
    return ctx
  }
}
