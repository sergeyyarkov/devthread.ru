import React from 'react';
import PropTypes from 'prop-types'
import slugify from '../../helpers/slugify'
import Img from "gatsby-image"

const Books = ({ data: { edges } }) => {
  return (
    <div className="books">
      <div className="books-inner inner">
        {edges.map(({ node }, i) => <div key={i}>
  <h2>{node.frontmatter.title} <a id={slugify(node.frontmatter.title)} href={`/books#${slugify(node.frontmatter.title)}`} className='anchor'>{node.frontmatter.title}</a></h2>
          <Img loading="eager" fadeIn={false} fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
          <div className='md' dangerouslySetInnerHTML={{__html: node.html}}></div>
        </div>)}
      </div>
    </div>
  )
}

export default Books

Books.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array
  })
}