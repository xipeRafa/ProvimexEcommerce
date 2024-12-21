import './Foother.css'

import pedidos from '../../imgs/polanco/reparar.jpg'
import mujer from '../../imgs/polanco/maquinar.jpg'
import entregas from '../../imgs/polanco/fabricacion.jpg'
import embobinar from '../../imgs/polanco/embobinar.jpg'

import banner from '../../imgs/polanco/cta-bg2.jpg'
import nueve from '../../imgs/polanco/provimex2.webp'

const Foother = () => {
      return (
      <div className="foother">
        {/* Connect */}
        <section className="connect">
          <div className="connect-text">
            <span>Let's Talk</span>
            <h2>Contactanos Ahora</h2>
          </div>
          <div>
            <a className="btn-f btn">Contacto</a>
          </div>
        </section>
        {/* Service */}
        <section className="services" id="services">
          <div className="heading-foother">
            <span>Servicios</span>
            <h2>Brindamos los Mejores Servicios</h2>
          </div>
          <div className="services-container">
            {/* Box 1 */}
            <div className="s-box">
              <img className='mujer' src={pedidos} alt="banca" />
              <h3>Reparación</h3>
            </div>
            {/* Box 2 */}
            <div className="s-box">
              <img className='mujer' src={mujer} alt="bsn" /* style={{height: '100px', }} *//>
              <h3>Maquinados</h3>
            </div>
            {/* Box 3  */ }
            <div className="s-box">
              <img className='mujer' src={entregas} alt="entregas" />
              <h3>Fabricación</h3>
            </div>

             <div className="s-box">
              <img className='mujer' src={embobinar} alt="entregas" />
              <h3>Embobinado</h3>
            </div>
          </div>
        </section>

        <section className="banner">
          <img src={banner} alt="" />
        </section>


        {/* Contact */}
        <section className="contact" id="contact">
          <div className="contact-box">
            <h3>PROVIMEX</h3>
            <span>Redes Sociales</span>
            <div className="social">
              <li><a href='https://www.facebook.com//provimexHmo' target='_blank' ><i className="bx bxl-facebook" />facebook</a></li>
              <li><a><i className="bx bxl-twitter" /></a></li>
              <li><a><i className="bx bxl-instagram" /></a></li>
            </div>
          </div> 
          <div className="contact-box">
            <h3>Menu</h3>
            <li><a>Inicio</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Productos</a></li>
            <li><a>Servicios</a></li>
          </div> 
        {/*  <div className="contact-box">

            <h3>San Carlos</h3>
            <li><a>BLVD. GABRIEL ESTRADA NO. 129</a></li>
            <li><a>COL. CLUB RESIDENCIAL EL CARACOL</a></li>
            <li><a>CP 85506</a></li>
            <li><a>EST. 2022</a></li>
             <span>+52 662 348 0101</span>
          </div>*/}
          <div className="contact-box address">
            <h3>Hermosillo</h3>
            <span>Cuernavaca N° 103</span>
            <span>Tlaxcala y Quintana Roo</span>
            <span>Col. San Benito 83190</span> 
            <span>Hermosillo, Sonora, Mexico</span>
            <span>ventas@provi-mex.com</span>
            <span>662-4293825</span>
          </div>
        </section>
        {/* Copyright */}
        <div className="copyright">
          <p>© All Right Reserved.</p>
        </div>
        <img className='nueve' src={nueve} alt="" />
      </div>
    );
  }


export default Foother
