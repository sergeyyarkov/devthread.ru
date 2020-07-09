import React from 'react';
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Contacts from '../components/Contacts/Contacts'

const ContactsPage = () => {
  const { siteMetadata: { social: { email, telegram } } } = useSiteMetadataQuery()
  return (
    <Layout>
      <SEO title='📝 Контакты' description='Для того чтобы задать вопрос, сообщить об ошибках или просто поздороваться, вы можете воспользоваться формой обратной связи или использовать контактные данные.' />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={10} lgOffset={1}>
              <Contacts email={email} telegram={telegram} />
            </Col>
          </Row>
        </Grid>
      </Main>
    </Layout>
  )
}

export default ContactsPage