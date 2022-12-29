import Head from 'next/head'
import { useState, useEffect } from 'react'
import useLayoutEffect from '../hooks/useIsomorphicLayoutEffect'
import {
  Navbar,
  Hero,
  About,
  Experiences,
  Skills,
  Projects,
  Footer,
} from '../components'
import useTheme from '../hooks/useTheme'

const App = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const [isFirstRender, setIsFirstRender] = useState(true)

  useLayoutEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'))

    if (theme !== null) {
      setIsDarkMode(theme)
    }

    if (isFirstRender) setIsFirstRender(false)
  }, [])

  useEffect(() => {
    const obeserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => obeserver.observe(el))
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', !isDarkMode)
  }

  return (
    <div
      className={`container${isDarkMode ? ' theme--dark' : ' theme--light'}`}
      id='home'
    >
      <Head>
        <title>Erlangga&apos;s Journey</title>
        <meta
          name='description'
          content='Welcome to my web developer portfolio! I am a skilled and experienced web developer with a strong background in HTML, CSS, JavaScript, and React. On this site, you can find examples of my past work and learn more about my skills and experience. Feel free to reach out to me if you have any questions or would like to collaborate on a project.'
        />
        <meta
          name='keywords'
          content='web development, web design, HTML, CSS, JavaScript, responsive design, portfolio, perseonal website, web developer, react js developer, react, frontend, frontend developer, developer, indonesia, Tritera Erlangga, Tritera,Erlangga, troyy213, troy213, troy'
        />
        <meta name='author' content='Tritera Erlangga' />
        <link rel='canonical' href='https://triteraerlangga.com/' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => toggleDarkMode()} />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
