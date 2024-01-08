import { Link } from 'wouter'

export function Footer() {
  return (
    <footer className="absolute bottom-0 mt-12 py-4 w-full bg-[#f3f3f3] ">
      <div className="container mx-auto px-3 flex items-center">
        <Link to="/" className="font-['Titillium_Web']">conduit</Link>
        <span className="ml-2.5 text-xs text-[#bbb] font-light">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
          Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
}