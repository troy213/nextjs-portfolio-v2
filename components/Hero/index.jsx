import { useState } from 'react'
import useTheme from '../../hooks/useTheme'
import { Avatar, Modal } from '../'
import {
  DownloadIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
  RobotIcon,
  CommonCvIcon,
} from '../../assets/icons'

const Hero = () => {
  const { isDarkMode } = useTheme()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const animateMouthOpen = () => {
    const mouthOpened = document.getElementById('mouth-opened')

    mouthOpened.style.display = 'block'
  }

  const animateMouthClose = () => {
    const mouthOpened = document.getElementById('mouth-opened')

    mouthOpened.style.display = 'none'
  }

  const docxDownload = () => {
    fetch('/files/ATS-CV-Tritera_Erlangga.docx').then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob)
        let a = document.createElement('a')
        a.href = url
        a.download = 'ATS-CV-Tritera_Erlangga.docx'
        a.click()
      })
    })
  }

  return (
    <section className='hero' id='hero'>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        isDarkMode={isDarkMode}
      >
        <div className='modal__content--default'>
          <p className='mb-4'>Which type of CV do you want to download?</p>
          <button className='btn btn-orange p-4' onClick={docxDownload}>
            <RobotIcon />
            <span>ATS-Friendly CV</span>
          </button>
          <a
            href='/files/CV-Tritera_Erlangga.pdf'
            download
            target='_blank'
            rel='noreferrer noopener'
            className='btn btn-orange p-4'
          >
            <CommonCvIcon />
            <span>Common CV</span>
          </a>
        </div>
      </Modal>
      <div className='hero__left'>
        <span className='hero__pre-title text--bold text--mono color--primary-light'>
          Hi, I&apos;m
        </span>
        <span className='hero__title text--bold text--mono color--primary'>
          Tritera Erlangga
        </span>
        <span className='hero__subtitle text--bold text--mono'>
          I&apos;m a Web Developer
        </span>
        <p className='hero__desc text--light line-height--6'>
          Just a man pursuing his dream as a professional programmer. I
          graduated from Budiluhur University with a bachelor&apos;s degree in
          Computer Science in 2018.
        </p>
        <button
          className='btn btn-orange'
          onMouseEnter={animateMouthOpen}
          onMouseLeave={animateMouthClose}
          onClick={() => setModalIsOpen(true)}
        >
          Resume <DownloadIcon className='btn-icon' />
        </button>
        <div className='hero__icon-container'>
          <a
            href='https://www.instagram.com/tritera.erlangga'
            target='_blank'
            rel='noreferrer noopener'
          >
            <InstagramIcon className='hero__icon icon color--primary-light' />
          </a>
          <a
            href='https://www.facebook.com/dev.triteraerlangga'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FacebookIcon className='hero__icon icon color--primary-light' />
          </a>
          <a
            href='https://www.linkedin.com/in/tritera-erlangga-0ab7b5183'
            target='_blank'
            rel='noreferrer noopener'
          >
            <LinkedinIcon className='hero__icon icon color--primary-light' />
          </a>
          <a
            href='https://github.com/troy213'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubIcon className='hero__icon icon color--primary-light' />
          </a>
        </div>
      </div>
      <div className='hero__right'>
        <Avatar />
      </div>
    </section>
  )
}

export default Hero
