import { cx } from 'class-variance-authority'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLocation } from 'wouter'

import { Store } from '~/domain/store.ts'
import { handleError } from '~/error-handling/index.ts'
import { isApiErrorHolder } from '~/http/error-parser.ts'

const schema = yup
  .object({
    email: yup.string().email().required().label('Email'),
    password: yup.string().min(5).required().label('Password'),
  })
  .required()

export function LoginPage() {
  const store = Store.useCtx()
  const [_, setLocation] = useLocation()
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  const safeHandleSubmit = (evt?: React.BaseSyntheticEvent) => {
    void handleSubmit(data =>
      store.login(data).then(() => setLocation('/', { replace: true }))
    )(evt).catch(e => {
      if (isApiErrorHolder(e) && e.err.name === 'UnauthorizedError') {
        setError('root', { type: 'api', message: 'email or password is invalid'})
        return
      }
      return handleError(e)
    })
  }

  return (
    <div className="mt-6 px-6">
      <div className={cx([
        'sm:mx-auto sm:w-full sm:max-w-sm',
        'flex flex-col'
      ])}>
        <h1 className="mb-2 self-center text-[2.5rem] leading-[1.1]">Sign in</h1>
        <p className="mb-4 self-center">
          <a href="/register">Need an account?</a>
        </p>

        <ul className="mb-4 text-[#b85c5c] font-bold">
          <li>{errors.root?.message}</li>
          <li>{errors.email?.message}</li>
          <li>{errors.password?.message}</li>
        </ul>

        <form className="flex flex-col" onSubmit={safeHandleSubmit}>
          <input className={cx('mb-4', formControl)} type="text" placeholder="Email" {...register('email')} />
          <input className={cx('mb-4', formControl)} type="password" placeholder="Password" {...register('password')} />
          <button className={btn} type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}

const formControl = cx([
  'w-full',
  'border border-solid border-black/15 rounded',
  'focus:border-[#66afe9] focus:outline-none',
  'py-3 px-6',
  'text-xl/none',
])

const btn = cx([
  'self-end',
  'rounded',
  'py-3 px-6',
  'text-xl/5',
  'text-white',
  'bg-[#5cb85c]',
  'hover:bg-[#419641] hover:border-[#449d44]',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#419641] focus-visible:ring-offset-2'
])