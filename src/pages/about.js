import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Offers from '../components/Offers/Offers'
import About from '../components/About/About'

const AboutPage = () => {
  const { siteMetadata: { title, menuLinks, email } } = useSiteMetadata()
  return (
    <Layout>
      <SEO title='О сайте' description='Этот сайт придуман для того, чтобы помочь вам разобраться с вашей проблемой и решить её. Сайт содержит в себе статьи и руководства.' />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <About title={title} pageTitle={menuLinks.filter(page => page.link === '/about')[0].name} email={email} />
            </div>
            <div className="col-md-3 col-xs-12">
              <Offers />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage