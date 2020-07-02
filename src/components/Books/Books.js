import React from 'react';
import './Books.scss'

import BooksIcon from '../../images/books-icon__large.svg'

const Books = () => {
  return (
    <div className="books">
      <div className="books-heading">
        <BooksIcon />
        <h1>Что почитать</h1>
      </div>
      <div className="books-description">
        <p>
          Здесь представлен список книг по программированию, которые стоило бы прочитать
        </p>
      </div>
      <div className="books-inner inner">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
        <p>
          <img src="https://i.imgur.com/2OMOIej.jpg" alt="book" />
        </p>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
        <a href="/" target="_blank">купить на litres.ru</a>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
        <p>
          <img src="https://i.imgur.com/2OMOIej.jpg" alt="book" />
        </p>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
        <a href="/" target="_blank">купить на litres.ru</a>
      </div>
    </div>
  )
}

export default Books