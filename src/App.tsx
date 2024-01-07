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
            <div className="home-page">
              <div className="banner">
                <div className="container">
                  <h1 className="logo-font">conduit</h1>
                  <p>A place to share your knowledge.</p>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/login">
            <div className="auth-page">
              <div className="container page">
                <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center">Sign in</h1>
                    <p className="text-xs-center">
                      <a href="/register">Need an account?</a>
                    </p>

                    <ul className="error-messages">
                      <li>That email is already taken</li>
                    </ul>

                    <form>
                      <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="text" placeholder="Email" />
                      </fieldset>
                      <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="password" placeholder="Password" />
                      </fieldset>
                      <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/register">
            <div className="auth-page">
              <div className="container page">
                <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center">Sign up</h1>
                    <p className="text-xs-center">
                      <a href="/login">Have an account?</a>
                    </p>

                    <ul className="error-messages">
                      <li>That email is already taken</li>
                    </ul>

                    <form>
                      <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="text" placeholder="Username" />
                      </fieldset>
                      <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="text" placeholder="Email" />
                      </fieldset>
                      <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="password" placeholder="Password" />
                      </fieldset>
                      <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                    </form>
                  </div>
                </div>
              </div>
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