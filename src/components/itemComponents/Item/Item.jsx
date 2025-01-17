import React from 'react';

//Particular CSS
import './Item.css';

//Routing
import { Link } from 'react-router-dom';


const Item = ({ id, codigo, imgUrl, description, di, de, ancho, precio }) => {


    return (
        <Link to={`/ProvimexEcommerce/item/${id}`} onClick={()=>{

                                                    setTimeout(()=>{
                                                        window.scrollTo(0,250)
                                                    },100)     

                                                }} >

            <div className="card-container">
                <div className="img-container" >
                    <img src='https://http2.mlstatic.com/D_NQ_NP_2X_645063-MLM76032781605_042024-F.webp' alt="imagen"/>
                </div>

                <div className="info-container">
                    
                    <p className='title truncate'>{codigo}</p>
                    <p className='description'>Diametro Int: {di}</p>
                    <p className='description'>Diametro Ext: {de}</p>
                    <p className='description'>Ancho: {ancho}</p>
                    <p className='description'>Precio: {precio}</p>
                 
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