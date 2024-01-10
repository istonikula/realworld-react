import { UserService } from '../domain/ports.ts'
import { Login, User, NewUserRegistration } from '../domain/user.ts'

const jane: User = {
  username: 'jane',
  email: 'jane@realworld.io',
  token: 'TODO'
}

export function useUserClient(): UserService {
  return {
    currentUser() {
      return Promise.resolve(jane)
    },

    register(_: NewUserRegistration) {
      return Promise.resolve(jane)
    },

    login(_: Login) {
      return Promise.resolve(jane)
    }
  }
}