import Image from 'next/image'
import { UserIcon, CalendarIcon, MapIcon } from '../../assets/icons'

const About = () => {
  return (
    <section className='about'>
      <h3 className='about__title text--bold text--8 text--mono color--primary'>
        About Me
      </h3>
      <div className='about__detail-wrapper'>
        <Image
          src='/profile-photo.png'
          className='about__profile-photo'
          alt='profile-photo'
          width='300'
          height='291'
        />
        <div className='about__detail'>
          <div className='about__detail-content-wrapper'>
            <UserIcon className='about__detail-icon' />
            <div className='about__detail-content'>
              <p className='text--bold text--mono color--primary'>Name</p>
              <p className='text--light'>Tritera Erlangga</p>
            </div>
          </div>
          <div className='about__detail-content-wrapper'>
            <CalendarIcon className='about__detail-icon' />
            <div className='about__detail-content'>
              <p className='text--bold text--mono color--primary'>Age</p>
              <p className='text--light'>27 Years</p>
            </div>
          </div>
          <div className='about__detail-content-wrapper'>
            <MapIcon className='about__detail-icon' />
            <div className='about__detail-content'>
              <p className='text--bold text--mono color--primary'>Location</p>
              <p className='text--light'>South Tangerang</p>
            </div>
          </div>
        </div>
      </div>
      <p className='about__desc text--light line-height--6'>
        I love traveling, acoustic, drawing, photography, and coffee. I
        graduated with a degree in Computer Science and have an interest in web
        development, which allows me to develop new skills while strengthening
        those I already have. I have over seven years of professional experience
        as an office administrator, which has enabled me to develop good
        organizational skills and the ability to work under pressure.
      </p>
    </section>
  )
}

export default About
