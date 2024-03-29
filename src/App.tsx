import * as React from 'react'
import { Route, Switch } from 'wouter'

import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import { Store, useStore } from './domain/use-store.ts'
import { ModalContainer, Modals, useModals } from './components/Modals.tsx'
import { GlobalModal } from './globals/index.ts'

export function App() {
  return (
    <GlobalModalProvider>
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

        <ModalContainer />
      </main>
    </Layout>
    </StoreLoader>
    </GlobalModalProvider>
  )
}

function GlobalModalProvider(props: React.PropsWithChildren) {
  const modals = useModals()
  GlobalModal.set(modals)

  return (
    <Modals.Provider value={modals}>
      {props.children}
    </Modals.Provider>
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
