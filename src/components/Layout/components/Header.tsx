import { cva, cx } from 'class-variance-authority'
import { Link as WLink, useRoute } from 'wouter'

export function Header() {
  return (
    <nav className="py-2 px-4">
      <div className={cx([
        'container',
        'mx-auto max-w-6xl',
        'px-3',
        'flex justify-between items-center'
      ])}>
        <a className="font-['Titillium_Web'] text-2xl" href="/">conduit</a>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-4">
            <Link to="/login">Sign in</Link>
          </li>
          <li className="ml-4">
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Link(props: React.PropsWithChildren<{ to: string }>) {
  const [active] = useRoute(props.to)
  const cn = link({ state: active ? 'active' : 'inactive' })
  return (<WLink className={cn} to={props.to}>{props.children}</WLink>)
}
const link = cva(
  [
    'hover:no-underline',
    'focus:no-underline'
  ], {
  variants: {
    state: {
      active: [
        'text-black/80',
        'hover:text-black/80',
        'focus:text-black/80'
      ],
      inactive: [
        'text-black/30',
        'hover:text-black/60',
        'focus:text-black/60'
      ]
    }
  }
})
