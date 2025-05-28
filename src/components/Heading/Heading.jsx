
import './Heading.css'
import logo from '../../imgs/polanco/provimex2.webp'
const Heading = () => {
      return (
           
                  <div className="heading">
                        {/*<p>Somos una Empresa que</p>*/}
                        <h2>Soluciones Industriales.</h2>
                        <div className='imgContainer'>
                              <img className='polanco' src={logo} alt="polanco" />
                        </div>
                  </div>
          
      )
}

export default Heading
