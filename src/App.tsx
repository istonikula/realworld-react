import { Link, Route, Switch } from 'wouter'

export function App() {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Switch>
          <Route path="/">
            <div>
              <h1 className="text-3xl font-bold underline">
                A place to share your knowledge.
              </h1>
            </div>
          </Route>
          <Route path="/login">
            <div>
              <h1 className="text-3xl font-bold underline">
                Sign in
              </h1>
            </div>
          </Route>
          <Route path="/register">
            <div>
              <h1 className="text-3xl font-bold underline">
                Sign up
              </h1>
            </div>
          </Route>
        </Switch>
      </main>
      <footer>
        <div className="container">
          <Link to="/" className="logo-font">conduit</Link>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
            Code &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  )
}
 export function helloVitest() {
  return "Hello vitest!"
 }