import React from 'react';
import SEO from '../SEO/SEO'
import Img from "gatsby-image"
import slugify from '../../helpers/slugify'
import { Link } from 'gatsby'
import './Article.scss'

import ViewsIcon from '../../images/views-icon.svg'
import VkIcon from '../../images/vk-icon.svg'
import TwitterIcon from '../../images/twitter-icon__large.svg'
import FacebookIcon from '../../images/facebook-icon__large.svg'

const Article = ({ data: { title, image, description, category, tags, time, date }, html }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="article">
        <article>
          <div className="article-info">
            <div className="left-info">
              <div className="article-info__time">
                <span>~ {time} мин</span>
              </div>
              <div className="article-info__views">
                <ViewsIcon />
                <span>4252</span>
              </div> 
            </div>
            <div className="right-info">
              <div className="article-info__date">
                <span>{new Date(date).toLocaleDateString()}</span>
              </div> 
            </div>
          </div>
          <div className="article-heading">
            <h1>{title}</h1>
          </div>
          <div className="article-category">
            <Link to={`/category/${slugify(category)}`}>{category}</Link>
          </div>
          <div className="article-share">
            <span>Поделиться:</span>
            <div className="article-share__social">
              <a href="/">
                <VkIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div className="article-description">
            <p>
              {description}
            </p>
          </div>
          <div className="article-tags">
            {tags.map((tag, i) => <div key={i} className="tag-item">
              <Link to={`category/${tag}`}>{tag}</Link>
            </div>)}
          </div>
          <div className="article-image">
            <Img loading="eager" fadeIn={false} fluid={image.childImageSharp.fluid} alt={title} />
          </div>
          <div className="article-inner inner">
            <div dangerouslySetInnerHTML={{__html: html}}></div>
          </div>
          <div className="article-more">
            <span>Смотреть еще в категории <Link to={`/category/${slugify(category)}`}>{category}</Link></span>
          </div>
          <div className="article-comments">
            <div className="article-comments__heading">
              <h2>Комментарии</h2>
            </div>
            <div className="article-comments__content">
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Article