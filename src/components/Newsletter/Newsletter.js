import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Newsletter = () => {
  const [email, setEmail] = React.useState("")
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState({ isError: false, message: "" })

  const submitHandler = async e => {
    try {
      e.preventDefault()

      if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setError({ isError: true, message: "Заполните поле в формате E-mail!" })
        setSuccess(false)
        window.setTimeout(() => setError({ isError: false, message: "" }), 5000)
        return
      }

      setError({ isError: false, message: "" })

      const data = await addToMailchimp(email)

      if (data.result !== "success") {
        setError({
          isError: true,
          message: `Произошла ошибка, возможно "${email}" уже подписан на рассылку. Попробуйте запрос позже.`,
        })
        window.setTimeout(() => setError({ isError: false, message: "" }), 5000)
        console.log(data.msg)
        return
      }

      setSuccess(true)
      window.setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.log(error)
      setSuccess(false)
    }
  }

  const handleChangeEmail = e => {
    const email = e.target.value.trim().toLowerCase()

    setEmail(email)
  }

  return (
    <div className="newsletter">
      <div className="newsletter-heading">
        <span role="img" aria-label="hot">
          📫
        </span>{" "}
        Новостная рассылка
      </div>
      <div className="newsletter-content">
        <p>
          Подпишитесь на новостную рассылку чтобы не пропустить вышедшие статьи
        </p>
        <form onSubmit={submitHandler} action="#" target="_blank">
          <div className="email-field">
            <input
              value={email}
              onChange={handleChangeEmail}
              placeholder="ваш e-mail"
              name="email"
            />
            <button>Подписаться</button>
          </div>
        </form>
        {success ? (
          <p className="newsletter-content__success">
            <span role="img" aria-label="checkMark">
              ✔️
            </span>{" "}
            Вы успешно подписались на рыссылку!
          </p>
        ) : null}
        {error.isError ? (
          <p className="newsletter-content__error">{error.message}</p>
        ) : null}
      </div>
    </div>
  )
}

export default Newsletter
