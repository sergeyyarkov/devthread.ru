import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Contacts from '../components/Contacts/Contacts'

const ContactsPage = () => {
  return (
    <Layout>
      <SEO title='📝 Контакты' description='Для того чтобы задать вопрос, сообщить об ошибках или просто поздороваться, вы можете воспользоваться формой обратной связи или использовать контактные данные.' />
      <main>
        <Grid fluid>
          <Row>
            <Col lg={10} lgOffset={1}>
              <Contacts />
            </Col>
          </Row>
        </Grid>
      </main>
    </Layout>
  )
}

export default ContactsPage