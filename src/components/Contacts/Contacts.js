import React from 'react';
import ContactsFrom from './ContactsForm/ContactsForm';
import useSiteMetadata from '../../hooks/useSiteMetadata'
import './Contacts.scss'

import MemoIcon from '../../images/memo-icon.svg'

const Contacts = () => {
  const { siteMetadata: { email } } = useSiteMetadata()
  
  return (
    <div className="contacts">
      <div className="contacts-heading">
        <MemoIcon />								
        <h1>Контакты</h1>
      </div>
      <div className="contacts-description">
        <p>
          Для того чтобы задать вопрос, сообщить об ошибках или просто поздороваться, вы можете воспользоваться формой обратной связи или использовать контактные данные.
        </p>
      </div>
      <ContactsFrom />
      <div className="contacts-info">
        <h2>контактные данные</h2>
        <ul>
          <li><a href={`mailto:${email}`}>{email}</a></li>
          <li><a href="/">telegram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts