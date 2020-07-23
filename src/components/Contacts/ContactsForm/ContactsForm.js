import React from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactsFrom = () => {
  const [state, setState] = React.useState({})
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setSubmitted(true))
      .catch(error => {
        console.error(error)
        setError(true)
      })
  }

  if (error)
    return (
      <div className="contacts-submitted">
        <h2>
          <span role="img" aria-label="done">
            ❌
          </span>{" "}
          Произошла ошибка при отправке.
        </h2>
        <p>
          При обработке вашго письма произошла ошибка, попробуйте повторить
          запрос через некоторое время.
        </p>
      </div>
    )

  if (submitted)
    return (
      <div className="contacts-submitted">
        <h2>
          <span role="img" aria-label="done">
            ✔️
          </span>{" "}
          Данные приняты!
        </h2>
        <p>
          Ваше письмо было обработано, в течение нескольких дней вам на почту
          придет ответ.
        </p>
        <button className="reload-form" onClick={() => setSubmitted(false)}>
          повторить запрос
        </button>
      </div>
    )

  return (
    <div className="contacts-form">
      <h2>форма обратной связи</h2>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div hidden>
          Не заполняйте это
          <input name="bot-field" onChange={handleChange} />
        </div>
        <div className="form-content">
          <input
            onChange={handleChange}
            name="name"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            onChange={handleChange}
            name="email"
            placeholder="Ваша почта"
            type="email"
          />
          <input
            onChange={handleChange}
            name="subject"
            placeholder="Тема сообщения"
            type="text"
          />
          <textarea
            onChange={handleChange}
            name="message"
            placeholder="Ваше сообщение..."
            defaultValue={""}
          />
          <div className="submit-btn">
            <button className="btn-primary" type="submit">
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactsFrom
