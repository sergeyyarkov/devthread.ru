import React from 'react';
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Contacts from '../components/Contacts/Contacts'

const ContactsPage = () => {
  return (
    <Layout>
      <SEO title='📝 Контакты' description='Для того чтобы задать вопрос, сообщить об ошибках или просто поздороваться, вы можете воспользоваться формой обратной связи или использовать контактные данные.' />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <Contacts />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContactsPage