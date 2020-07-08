import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './About.scss'

import ContactsIcon from '../../images/contacts-icon.svg'

const About = ({ title, pageTitle, social }) => {
  return (
    <div className="about">
      <div className="about-heading">
        <h1>{pageTitle}</h1>
      </div>
      <div className="about-content">
        <div className="about-content__info">
          <h2>{title}</h2>
          <h3>публикуем статьи о мире веб-разрабоки и IT</h3>
          <p>
            этот сайт придуман для того, чтобы помочь вам разобраться с вашей проблемой и решить её. Сайт содержит
            в себе статьи и руководства.
          </p>
          <p>
            ~ к тому же здесь публикуются различные новости которые произошли за последнее время
          </p>
        </div>
        <div className="about-content__contacts">
          <div className="contacts-heading">
            <ContactsIcon />
            <span>контакты</span>
          </div>
          <ul>
            <li><a href={`mailto:${social.email}`}>{social.email}</a></li>
            <li><a href={social.telegram} target='_blank' rel='noreferrer'>telegram</a></li>
            <Link to='/contacts'>форма обратной связи</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

About.propTypes = {
  title: PropTypes.string,
  pageTitle: PropTypes.string,
  email: PropTypes.string
}

About.defaultProps = {
  title: null,
  pageTitle: null,
  email: null
}