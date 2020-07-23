import React from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactsFrom = () => {
  const [state, setState] = React.useState({})
  const [submitted, setSubmitted] = React.useState(false)

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
      .catch(error => alert(error))
  }

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
      >
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
      </form>
    </div>
  )
}

export default ContactsFrom
