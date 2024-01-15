import * as React from 'react'
import { useSignals } from '@preact/signals-react/runtime'
import { Route, Switch } from 'wouter'

import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import { Store, createStore } from './domain/store.ts'
import { ModalContainer, Modals, useModals } from './components/Modals.tsx'
import { GlobalModal } from './globals/index.ts'
import { userClient } from './http/user.ts'

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

const store = createStore(userClient)
function StoreLoader(props: React.PropsWithChildren) {
  useSignals()

  return store.loading.value ? <div>Loading... <button onClick={() => store.loading.value = false}>stop loading</button></div> : (
    <Store.Provider value={store}>
      {props.children}
    </Store.Provider>
  )
}
