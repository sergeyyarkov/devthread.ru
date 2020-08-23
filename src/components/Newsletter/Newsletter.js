import React from "react"

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-heading">Новостная рассылка</div>
      <div className="newsletter-content">
        <form action="#" target='_blank'>
          <p>
            <span role="img" aria-label="hot">
              🔥
            </span>{" "}
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga
          </p>
          <div className="email-field">
            <input placeholder="ваш e-mail" type="text" name="email" />
            <button>Подписаться</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
