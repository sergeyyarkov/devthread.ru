import React from "react"
import PropTypes from "prop-types"
import slugify from "../../../helpers/slugify"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ArticleCard = ({
  data: { slug, title, image, category, description, tags },
  amp,
}) => {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <Link to={`/article/${slug}/`}>
          {!amp ? (
            <Img
              loading="eager"
              fadeIn={false}
              fluid={image.childImageSharp.fluid}
              alt={title}
            />
          ) : (
            <img
              src={image.childImageSharp.fluid.src}
              height="380"
              alt={title}
            />
          )}
        </Link>
      </div>
      <div className="article-card__heading">
        <h2>
          <Link to={`/article/${slug}/`}>{title}</Link>
        </h2>
      </div>
      <div className="article-card__category">
        <Link to={`/category/${slugify(category)}/`}>{category}</Link>
      </div>
      <div className="article-card__tags">
        <ul>
          {tags.map((tag, i) => (
            <li className="tag-item" key={i}>
              <Link to={`/tag/${tag}/`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="article-card__description">
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ArticleCard

ArticleCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.object,
    category: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }),
}
