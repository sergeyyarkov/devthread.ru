import React from "react"
import { useLocation } from "@reach/router"
import useMoreArticlesQuery from "../../../hooks/useMoreArticlesQuery"
import ArticleCard from "../ArticleCard/ArticleCard"

const MoreArticles = () => {
  const { edges } = useMoreArticlesQuery()
  const { pathname } = useLocation()
  const query = pathname.split("/")[pathname.split("/").length - 1]

  return (
    <div className="more-articles">
      <div className="more-articles__heading">
        <h2>Вам также может понравится...</h2>
      </div>
      <div className="more-articles__content">
        {edges
          .filter(({ node }) => node.frontmatter.slug !== query)
          .sort(() => Math.random() - 0.5)
          .map(({ node }, i) => {
            if (i < 4) {
              return <ArticleCard key={i} data={node.frontmatter} />
            }
            return null
          })}
      </div>
    </div>
  )
}

export default MoreArticles
