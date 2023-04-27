import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <section id="about" className="s-about target-section">
  <div className="row">
    <div className="column large-3 tab-12">
      <img className="s-about__pic" src="images/avatars/FotoPerfil.jpg" alt="" />
    </div>
    <div className="column large-9 tab-12 s-about__content">
      <h3>Acerca De Mi</h3>
      <p>
        Mi nombre es Adrian Torrez Subieta, estudiante de la carrera de Ingenieria
        de Sistemas en la Universidad Autonoma Tomas Frias (uatf), cursando cuarto
        año, naci el 08 de abril de 2001 en Potosi-Bolivia.
      </p>
      <hr />
      <div className="row s-about__content-bottom">
        <div className="column w-1000-stack">
          <h3>Redes Sociales y Contacto:</h3>
          <p>
            Facebook: Adrian Torrez <br />
            Instagram: adrian.torrez <br />
            Celular +591 68398855 <br />
            Correo adrianotorrez10@gmail.com
          </p>
        </div>
        
      </div>
    </div>
  </div>{" "}
  {/* end row */}
</section>

    )
  }
}