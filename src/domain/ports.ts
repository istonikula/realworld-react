import { Login, NewUserRegistration, User } from './user.ts'

export interface UserService {
  currentUser(): Promise<User | undefined>
  register(user: NewUserRegistration): Promise<User>
  login(user: Login): Promise<User>
}