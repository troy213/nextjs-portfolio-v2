import Link from 'next/link'
import { useState } from 'react'
import { MoonIcon, MenuIcon, SunIcon } from '../../assets/icons'
import { Menu } from '../'

const Navbar = (props) => {
  const { isDarkMode, toggleDarkMode } = props

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <header>
      <nav className='navbar'>
        <Link href='/'>
          <p className='navbar__logo text--bold text--mono color--primary'>
            Erlangga&apos;s Journey
          </p>
        </Link>
        <ul>
          <li className='navbar__link text--mono'>
            <a href='#home' className='color--primary'>
              Home
            </a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#experiences' className='color--primary'>
              Experiences
            </a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#skills' className='color--primary'>
              Skills
            </a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#projects' className='color--primary'>
              Projects
            </a>
          </li>
          <li className='navbar__link text--mono'>
            <a href='#contact' className='color--primary'>
              Contact
            </a>
          </li>
          <li
            className='navbar__link text--mono color--primary'
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </li>
          <li
            className='navbar__menu color--primary'
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <MenuIcon />
          </li>
        </ul>
      </nav>
      <Menu
        isCollapsed={isCollapsed}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </header>
  )
}

export default Navbar
