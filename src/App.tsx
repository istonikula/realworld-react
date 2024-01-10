import { Route, Switch } from 'wouter'
import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import { Store, useStore } from './domain/use-store.ts'

export function App() {
  return (
    <StoreLoader>
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
    </StoreLoader>
  )
}

function StoreLoader(props: React.PropsWithChildren) {
  const store = useStore()
  return store.loading ? <div>Loading...</div> : (
    <Store.Provider value={store}>
      {props.children}
    </Store.Provider>
  )
}