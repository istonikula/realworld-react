import { Login, NewUserRegistration, User } from './user.ts'

export interface UserService {
  register(user: NewUserRegistration): Promise<User>
  login(user: Login): Promise<User>
}