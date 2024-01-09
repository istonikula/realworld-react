import { cx } from 'class-variance-authority'

export function LoginPage() {
  return (
    <div className="container mt-6 mx-auto px-6">
      <div className={cx([
        'mx-auto max-w-md',
        'sm:w-3/5 md:w-1/2',
        'flex flex-col'
      ])}>
        <h1 className="mb-2 self-center text-[2.5rem] leading-[1.1]">Sign in</h1>
        <p className="mb-4 self-center">
          <a href="/register">Need an account?</a>
        </p>

        <ul className="mb-4 text-[#b85c5c] font-bold">
          <li>That email is already taken</li>
        </ul>

        <form className="flex flex-col">
          <fieldset className="mb-4">
            <input className={formControl} type="text" placeholder="Email" />
          </fieldset>
          <fieldset className="mb-4">
            <input className={formControl} type="password" placeholder="Password" />
          </fieldset>
          <button className={btn}>Sign in</button>
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
  'focus:bg-[#419641]'
])