import React from "react"

const Newsletter = () => {
  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="newsletter">
      <div className="newsletter-heading"><span role="img" aria-label="hot">📫</span>{" "}Новостная рассылка</div>
      <div className="newsletter-content">
        <p>
          Подпишитесь на новостную рассылку чтобы не пропустить вышедшие статьи
        </p>
        <form onSubmit={submitHandler} action="#" target='_blank'>
          <div className="email-field">
            <input placeholder="ваш e-mail" type="email" name="email" />
            <button>Подписаться</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
