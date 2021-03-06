import "gitalk/dist/gitalk.css"

import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import ViewCounter from "../ViewCounter/ViewCounter"
import useSiteMetadataQuery from "../../hooks/useSiteMetadataQuery"
import slugify from "../../helpers/slugify"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import GitalkComponent from "gitalk/dist/gitalk-component"

import ViewsIcon from "../../images/views-icon.svg"
import VkIcon from "../../images/vk-icon.svg"
import TwitterIcon from "../../images/twitter-icon__large.svg"
import FacebookIcon from "../../images/facebook-icon__large.svg"

const Article = ({
  data: { slug, title, image, description, category, tags, time, date },
  html,
  amp,
}) => {
  const {
    siteMetadata: {
      siteUrl,
      gitalk: { clientID, clientSecret, repo, owner, admin },
    },
  } = useSiteMetadataQuery()
  const { pathname } = useLocation()
  const [readyComments, setReadyComments] = React.useState(false)

  React.useEffect(() => setReadyComments(true), [setReadyComments])

  return (
    <>
      <div className="article">
        <article>
          <div className="article-info">
            <div className="left-info">
              <div className="article-info__time">
                <span>~ {time} мин</span>
              </div>
              {!amp ? (
                <div className="article-info__views">
                  <ViewsIcon />
                  <ViewCounter id={pathname} />
                </div>
              ) : null}
            </div>
            <div className="right-info">
              <div className="article-info__date">
                <span>{date}</span>
              </div>
            </div>
          </div>
          <div className="article-share">
            <div className="article-share__social">
              <a
                href={`https://vk.com/share.php?url=${siteUrl}/article/${slug}&title=${title}&image=${siteUrl}${image.childImageSharp.fluid.src}`}
                target="_blank"
                rel="noreferrer"
              >
                <VkIcon />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${title}&url=${siteUrl}/article/${slug}&image=${siteUrl}${image.childImageSharp.fluid.src}`}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}/article/${slug}&t=${title}`}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div className="article-heading">
            <h1>{title}</h1>
          </div>
          <div className="article-category">
            <Link to={`/category/${slugify(category)}`}>{category}</Link>
          </div>
          <div className="article-description">
            <p>{description}</p>
          </div>
          <div className="article-tags">
            {tags.map((tag, i) => (
              <div key={i} className="tag-item">
                <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
              </div>
            ))}
          </div>
          <div className="article-image">
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
                height="350"
                alt={title}
              />
            )}
          </div>
          <div className="article-inner inner">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
          <div className="article-more">
            <span>
              Смотреть еще в категории{" "}
              <Link to={`/category/${slugify(category)}`}>{category}</Link>
            </span>
          </div>
          <div className="article-comments">
            <div className="article-comments__heading">
              {readyComments ? (
                <GitalkComponent
                  options={{
                    clientID,
                    clientSecret,
                    repo,
                    owner,
                    admin: admin.split(","),
                    language: "ru",
                    id: slug.substr(0, 48),
                    title: title,
                    labels: ["Статья", "Обсуждение"],
                  }}
                />
              ) : null}
            </div>
            <div className="article-comments__content"></div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Article

Article.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string,
    keywords: PropTypes.array,
    title: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.array,
    time: PropTypes.string,
    date: PropTypes.string,
  }),
  html: PropTypes.string,
}
