import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DrawerProvider } from '../context/DrawerContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <Component {...pageProps} />
    </DrawerProvider>
  )
}
