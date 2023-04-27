import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
        <header className="s-header">
  <div className="row s-header__nav-wrap">
    <nav className="s-header__nav">
      <ul>
        <li className="current">
          <a className="smoothscroll" href="#hero">
            Inicio
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            Acerca de mi
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#Skills">
            Habilidades
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#Education">
            Educacion
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#Experience">
            Experiencia Laboral
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Proyectos
          </a>
        </li>
        
        <li>
          <a className="smoothscroll" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  </div>{" "}
  {/* end row */}
  <a className="s-header__menu-toggle" href="#0" title="Menu">
    <span className="s-header__menu-icon" />
  </a>
</header>

    )
  }
}