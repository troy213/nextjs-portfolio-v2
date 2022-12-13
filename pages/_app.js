import '../styles/main.scss'
import { ThemeProvider } from '../context/ThemeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
