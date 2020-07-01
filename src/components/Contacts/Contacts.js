import React from 'react';
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
      <div className="contacts-form">
        <h2>форма обратной связи</h2>
        <form action="#">
          <input placeholder="Ваше имя" type="text" />
          <input placeholder="Ваша почта" type="text" />
          <input placeholder="Тема сообщения" type="text" />
          <textarea placeholder="Ваше сообщение..." defaultValue={""} />
          <div className="submit-btn">
            <button className="btn-primary">Отправить</button>
          </div>
        </form>
      </div>
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