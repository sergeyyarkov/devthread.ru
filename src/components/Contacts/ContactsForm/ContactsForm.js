import React from "react"
import { useForm } from "react-hook-form"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactsFrom = () => {
  const { register, handleSubmit, errors } = useForm()
  const [state, setState] = React.useState({})
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...state,
      }),
    })
      .then(() => {
        setSubmitted(true)
        setState({})
      })
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
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {Object.keys(errors).filter(
          field =>
            errors[field].type === "required" ||
            errors[field].type === "pattern"
        ).length > 0 ? (
          <p className="error-info">* Заполните все поля в нужном формате </p>
        ) : null}
        <div hidden>
          Не заполняйте это
          <input name="bot-field" onChange={handleChange} />
        </div>
        <div className="form-content">
          <input
            className={errors.name ? "error-field" : null}
            onChange={handleChange}
            name="name"
            placeholder="Введите ваше имя"
            type="text"
            ref={register({ required: true, maxLength: 100 })}
          />
          <input
            className={errors.email ? "error-field" : null}
            onChange={handleChange}
            name="email"
            placeholder="Ваша почта example@email.com"
            type="email"
            ref={register({
              required: true,
              pattern: /^\S+@\S+$/i,
              maxLength: 100,
            })}
          />
          <input
            className={errors.subject ? "error-field" : null}
            onChange={handleChange}
            name="subject"
            placeholder="Тема сообщения"
            type="text"
            ref={register({ required: true })}
          />
          <textarea
            className={errors.message ? "error-field" : null}
            onChange={handleChange}
            name="message"
            placeholder="Ваше сообщение..."
            defaultValue={""}
            ref={register({ required: true })}
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
