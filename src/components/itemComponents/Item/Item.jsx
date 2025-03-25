import {useState, useEffect} from 'react';

//Particular CSS
import './Item.css';

//Routing
import { Link } from 'react-router-dom';


import unoImg from '../../../imgs/baleros/1.jpg'
import unoUnoImg from '../../../imgs/baleros/11.jpg'

import dosImg from '../../../imgs/baleros/2.jpg'
import dosDosImg from '../../../imgs/baleros/22.jpg'

import tresImg from '../../../imgs/baleros/3.jpg'
import cuatroImg from '../../../imgs/baleros/4.jpg'
import cincoImg from '../../../imgs/baleros/5.jpg'

import seisImg from '../../../imgs/baleros/6.jpg'



const Item = ({ id, codigo, imgUrl, description, di, de, ancho, precio }) => {



//         const [imgState, setImgState]=useState('hello')
// console.log(imgState)
let imgVar


            const imgsObj = {
                "RODAMIENTO RIGIDO DE BOLAS":unoImg,
                "RODAMIENTO A BOLAS DE CONTACTO ANGULAR":dosImg,
                "RODAMIENTO OSCILANTE DE RODILLOS":tresImg,
                "RODAMIENTO DE RODILLOS CILINDRICOS":cuatroImg,
                "RODAMIENTO AXIAL DE BOLAS":cincoImg,
                "RODAMIENTO DE RODILLO CONICO":seisImg,
                "ROADAMIENTO A BOLAS DE CONTACTO ANGULAR":dosImg,
                "RODAMIENTO RIGIDO A BOLAS":unoImg
            };

            const mySwitchFunction = (descriptio) => {
                    if(descriptio){
                           // console.log(descriptio)
                            imgsObj[descriptio]
                    }
            };

           
console.log(imgVar)


    return (
        <Link to={`/ProvimexEcommerce/item/${id}`} onClick={()=>{

                                                    setTimeout(()=>{
                                                        window.scrollTo(0,250)
                                                    },100)     

                                                }} >

            <div className="card-container">
                <div className="img-container" >
                    <img src={imgsObj[description]} alt="imagen"/>
                </div>

                <div className="info-container">
                    
                    <p className='title truncate'>{codigo}</p>
                    <p className='description'>Diametro Int: {di}</p>
                    <p className='description'>Diametro Ext: {de}</p>
                    <p className='description'>Alto: {ancho}</p>
                    <p className='description'>Precio: {precio}</p>
                    <small className=''> {description}</small>

                 
                    {/*{name==='Accesorio' ? <p className='description'>{description}</p> : <p className='description'>Tela {tela}</p>}*/}
                    

                   {/* {talla?.map((el,i)=>(
                          <span key={i}>{el } </span>
                    ))}*/}

                    
                    
                </div>
            </div>
            
        </Link>
    )
}

export default Item


//