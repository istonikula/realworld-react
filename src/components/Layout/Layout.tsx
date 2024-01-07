import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}