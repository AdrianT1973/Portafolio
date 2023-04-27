import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <section id="contact" className="s-contact target-section">
  <div className="row s-contact__header">
    <div className="column large-12">
      <h3 className="section-header-allcaps">Contactame</h3>
    </div>
  </div>
  <div className="row s-contact__content">
    <div className="column large-7 medium-12">
      <h4 className="huge-text">
      ¿Tienes un nuevo proyecto en mente? Colaboremos y construyamos algo increíble.
       Convirtamos esa idea en un producto aún mejor :)
      </h4>
    </div>
    <div className="column large-4 medium-12">
      <div className="row contact-infos">
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">Email</h5>
            <p className="contact-block__content">
              <a className="mailtoui" href="adrian:adrianotorrez10@gmail.com">
                adrianotorrez10@gmail.com
              </a>
            </p>
          </div>{" "}
          {/* end contact-block */}
        </div>
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">Celular: </h5>
            <p className="contact-block__content">
              <a href="tel:+1975432345">+591 68398855</a>
            </p>
          </div>{" "}
          {/* end contact-block */}
        </div>
        <div className="column large-12">
          <a
            href="adrian:adrianotorrez10@gmail.com"
            className="mailtoui btn btn--primary h-full-width"
          >
            Hablemos!
          </a>
        </div>
      </div>{" "}
      {/* end contact-infos */}
    </div>
  </div>{" "}
  {/* s-contact__content */}
</section>

    )
  }
}