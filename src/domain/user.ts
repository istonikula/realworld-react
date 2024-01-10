
export type User = {
  email: string
  token: string
  username: string
  bio?: string
  image?: string
}

export type NewUserRegistration = {
  username: string
  email: string
  password: string
}

export type Login = {
  email: string
  password: string
}