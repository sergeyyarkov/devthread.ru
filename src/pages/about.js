import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Main } from "../ui/ui"
import useSiteMetadataQuery from "../hooks/useSiteMetadataQuery"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Offers from "../components/Offers/Offers"
import About from "../components/About/About"

const AboutPage = () => {
  const {
    siteMetadata: { title, menuLinks, social },
  } = useSiteMetadataQuery()
  return (
    <Layout>
      <SEO
        title="О сайте"
        description="Этот сайт придуман для того, чтобы помочь вам разобраться с вашей проблемой и решить её. Сайт содержит в себе статьи и руководства."
      />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={9} xs={12}>
              <About
                title={title}
                pageTitle={
                  menuLinks.filter(page => page.link === "/about")[0].name
                }
                social={social}
              />
            </Col>
            <Col lg={3} xs={12}>
              <Offers />
            </Col>
          </Row>
        </Grid>
      </Main>
    </Layout>
  )
}

export default AboutPage
