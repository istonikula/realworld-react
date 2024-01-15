import axios from 'axios'

import { UserService } from '~/domain/ports.ts'
import { Login, User, NewUserRegistration } from '~/domain/user.ts'

export const userClient: UserService = {
  register(req: NewUserRegistration) {
    return axios.post<User>('/api/users', req).then(({ data }) => data)
  },

  login(req: Login) {
    return axios.post<User>('/api/users/login', req).then(({ data }) => data)
  }
}
