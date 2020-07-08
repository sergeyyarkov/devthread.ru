import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import './Description.scss'

import HelloIcon from '../../images/hello-icon.svg'

const Description = () => {
  return (
    <section className="description">
      <Grid fluid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="desctiption-content">
              <div className="description-content__heading">
                <span>devthread.ru</span><br />
                <h1>публикуем статьи о мире веб-разрабоки и IT</h1>
              </div>
              <div className="description-content__info">
                <p>
                  сборник статей и руководств по тематике веб-разработки и IT для того чтобы помочь вам
                </p>
                <HelloIcon />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export default Description