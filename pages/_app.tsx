import type { AppProps } from 'next/app'
import '../styles/nav.css'
import '../styles/responsive.css'
import '../styles/style.css'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}