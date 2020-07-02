import React from 'react';

const ContactsFrom = () => {
  return (
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
  )
}

export default ContactsFrom