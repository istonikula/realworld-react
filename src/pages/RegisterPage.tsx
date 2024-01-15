import { cx } from 'class-variance-authority'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLocation } from 'wouter'
import { handleError } from '~/error-handling'

import { Store } from '~/domain/store.ts'
import { tryParseGeneralApiErrorPayload } from '~/http/error-parser.ts'

const schema = yup
  .object({
    username: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required()

export function RegisterPage() {
  const store = Store.useCtx()
  const [_, setLocation] = useLocation()
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  const safeHandleSubmit = (evt?: React.BaseSyntheticEvent) => {
    void handleSubmit(data =>
      store.registerUser(data).then(() => setLocation('/', { replace: true }))
    )(evt).catch(e => {
      const payload = tryParseGeneralApiErrorPayload(e)
      if (payload != undefined) {
        setError('root', { type: 'api', message: payload.error })
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
        <h1 className="mb-2 self-center text-[2.5rem] leading-[1.1]">Sign up</h1>
        <p className="mb-4 self-center">
          <a href="/login">Have an account?</a>
        </p>

        <ul className="mb-4 text-[#b85c5c] font-bold">
          <li>{errors.root?.message}</li>
          <li>{errors.username?.message}</li>
          <li>{errors.email?.message}</li>
          <li>{errors.password?.message}</li>
        </ul>

        <form className="flex flex-col" onSubmit={safeHandleSubmit}>
          <input className={cx('mb-4', formControl)} type="text" placeholder="Username" {...register('username')} />
          <input className={cx('mb-4', formControl)} type="text" placeholder="Email" {...register('email')} />
          <input className={cx('mb-4', formControl)} type="password" placeholder="Password" {...register('password')} />
          <button className={btn} type="submit">Sign up</button>
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
