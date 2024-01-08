import { Link } from 'wouter'

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-3">
        <Link to="/" className="align-middle font-['Titillium_Web']">conduit</Link>
        <span className="ml-2.5 align-middle text-xs text-[#bbb] font-light">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
          Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
}