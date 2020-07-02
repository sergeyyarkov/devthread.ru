import React from 'react';
import './Description.scss'

import HelloIcon from '../../images/hello-icon.svg'

const Description = () => {
  return (
    <section className="description">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description