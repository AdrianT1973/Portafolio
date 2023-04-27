import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
      <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section" id="Skills">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Habilidades</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              
              <ul className="skill-bars-fat">
                <li>
                  <div className="progress percent85" />
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent65" />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className="progress percent70" />
                  <strong>Figma</strong>
                </li>
                <li>
                  <div className="progress percent60" />
                  <strong>Illustrator</strong>
                </li>
                <li>
                  <div className="progress percent60" />
                  <strong>Photoshop</strong>
                </li>
              </ul>
            </div>{" "}
            {/* end resume-block */}
          </div>
        </div>{" "}

        {/* s-resume__section */}
        <div className="row s-resume__section" id="Education">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Educacion</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Colegio</h4>
                <p className="resume-block__header-meta">
                  <span>Particular Don Bosco</span>
                  <span className="resume-block__header-date">Promocion 2018</span>
                </p>
              </div>
            </div>{" "}
            {/* end resume-block */}
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Universidad</h4>
                <p className="resume-block__header-meta">
                  <span>Universidad Autonoma Tomas Frias</span>
                  <span className="resume-block__header-date">Cuarto año</span>
                </p>
              </div>
            </div>{" "}
            {/* end resume-block */}
          </div>
        </div>{" "}

        {/* s-resume__section */}
        <div className="row s-resume__section" id="Experience">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Experiencia Laboral</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Ninguna aún</h4>
                
              </div>
              
            </div>{" "}
            
          </div>
        </div>{" "}
        {/* s-resume__section */}
        
        
        
        
      </section>
    )
  }
}