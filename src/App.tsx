import { Route, Switch } from 'wouter'
import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { Layout } from './components/Layout/Layout.tsx'

export function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </main>
    </Layout>
  )
}
