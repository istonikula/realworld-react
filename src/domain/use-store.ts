import * as React from 'react'
import { Login, NewUserRegistration, User } from './user.ts'
import { useUserClient } from '../http/user.ts'
import { UserService } from './ports.ts'

export function useStore() {
  const [user, setUser] = React.useState<User | undefined>(undefined)

  const userSrv: UserService = useUserClient()

  const loading = false

  const isLoggedIn = () => user != undefined

  const registerUser = (reg: NewUserRegistration): Promise<User> =>
    userSrv.register(reg).then(user => {
      setUser(user)
      return user
    })

  const login = (login: Login): Promise<User> =>
    userSrv.login(login).then(user => {
      setUser(user)
      return user
    })

  return {
    loading,

    isLoggedIn,
    user,

    registerUser,
    login
  }
}

const Ctx = React.createContext<ReturnType<typeof useStore> | undefined>(undefined)
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
