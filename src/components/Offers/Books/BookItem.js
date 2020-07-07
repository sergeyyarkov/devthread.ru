import React from 'react';
import { Link } from 'gatsby'
import slugify from '../../../helpers/slugify'

const BookItem = ({ title }) => {
  return (
    <div className="book-item">
      <Link to={`/books#${slugify(title)}`}>{title}</Link>
    </div>
  )
}

export default BookItem