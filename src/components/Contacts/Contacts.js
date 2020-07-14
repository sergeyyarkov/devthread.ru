import React from 'react';
import PropTypes from 'prop-types'
import ContactsFrom from './ContactsForm/ContactsForm';

import MemoIcon from '../../images/memo-icon.svg'

const Contacts = ({ email, telegram }) => {
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
          <li><a href={telegram}>telegram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts

Contacts.propTypes = {
  email: PropTypes.string,
  telegram: PropTypes.string
}