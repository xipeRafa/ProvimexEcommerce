import React, { useState } from 'react';

//Particular CSS
import './ItemDetail.css';

//Components
import ItemCount from '../ItemCount/ItemCount';
import FinishBuying from '../../FinishBuying/FinishBuying';
import TechInfo from '../../TechnInfo/TechInfo';


import unoImg from '../../../imgs/baleros/1.jpg'
import unoUnoImg from '../../../imgs/baleros/11.jpg'

import dosImg from '../../../imgs/baleros/2.jpg'
import dosDosImg from '../../../imgs/baleros/22.jpg'

import tresImg from '../../../imgs/baleros/3.jpg'
import cuatroImg from '../../../imgs/baleros/4.jpg'
import cincoImg from '../../../imgs/baleros/5.jpg'

import seisImg from '../../../imgs/baleros/6.jpg'





const ItemDetail = ({item}) => {
console.log(item)

    const [ bigImg, setBigImg ] = useState('');
    const [ isAdded, setIsAdded ] = useState(false);



     const imgsObj = {
                "RODAMIENTO RIGIDO DE BOLAS":unoImg,
                "RODAMIENTO A BOLAS DE CONTACTO ANGULAR":dosImg,
                "RODAMIENTO OSCILANTE DE RODILLOS":tresImg,
                "RODAMIENTO DE RODILLOS CILINDRICOS":cuatroImg,
                "RODAMIENTO AXIAL DE BOLAS":cincoImg,
                "RODAMIENTO DE RODILLO CONICO":seisImg,
                "ROADAMIENTO A BOLAS DE CONTACTO ANGULAR":dosDosImg,
                "RODAMIENTO RIGIDO A BOLAS":unoUnoImg
            };




    return (
        <div className="item-detail">
            <div className="container-one">
                <div className="img-counter-container">

                    <div className="small-images-big-image-container">
                      {/*  <div className="small-images ">
                            <div className="sm-img d-none" 
                                style={{ 
                                    backgroundImage: `url(${item.imgUrl})` 
                                }}
                                onMouseOver={ () => setBigImg({backgroundImage: `url(${item.imgUrl })`})}
                            >
                            </div>
                            <div className="sm-img" 
                                style={{
                                    backgroundImage: `url(${ item.imgUrl[1] !== undefined ? item.imgUrl[1] : item.imgUrl[0] })` 
                                }}
                                onMouseOver={ () => setBigImg({backgroundImage: `url(${item.imgUrl[1] !== undefined ? item.imgUrl[1] : item.imgUrl[0] })`})}
                            >
                            </div>
                            <div className="sm-img" 
                                style={{
                                    backgroundImage: `url(${item.imgUrl[2] !== undefined ? item.imgUrl[2] : item.imgUrl[0] })`,
                                }}
                                onMouseOver={ () =>{
                                    setBigImg({backgroundImage: `url(${item.imgUrl[2] !== undefined ? item.imgUrl[2] : item.imgUrl[0] })`});
                                }}
                            >
                            </div>
                        </div>*/}
                       {/* <div className="big-image" style={bigImg !== '' ? bigImg : { backgroundImage: `url(${item?.imgUrl})`} }>      
                        </div>*/}




                            <div  className="big-image" >
                                    <img src={imgsObj[item.description]} alt="imagen"/>
                            </div>


                    </div>



                    <ItemCount isAdded={isAdded} setIsAdded={setIsAdded} initial={1} stock={Number(item.stock)} item={item} /> 

                    { isAdded && <FinishBuying/> } 

                </div>
            </div>









            <div className="container-two">


                <div className="title-price">
 
                    <h4 className="item-name">{item.codigo}</h4>
                    <h4>$ {item.precio}</h4>
                    <p>Diametro Interior: {item.di}</p>
                    <p>Diametro Exterior: {item.de}</p>
                    <p>Ancho: {item.ancho}</p>
                    <small>{item?.stock < 1 ? <b className='bg-red'>SIN STOCK </b> : 'STOCK ' + item?.stock }</small>
{/*<small>{Number(localStorage.stockLS) < 1 ? <b className='bg-red'>SIN STOCK </b> : 'STOCK ' + Number(localStorage.stockLS) }</small>*/}
                    {/*<small>COD: { item.id}</small>*/}

                 {/*   <span className={item.name === 'Accesorio' ? 'd-nonde' : 'tallasArr' }>Tallas:</span>
                    <div className={item.name === 'Accesorio' ? 'd-nonde' : 'tallasArr' }>
                        {item.talla?.map((el,i)=>(
                            <b className='tallasB' key={i}>{el}</b>
                        ))}
                    </div> */}     

                    {/*{item.name === 'Accesorio' ? <h6>{item.description}</h6> : <h6>Tela {item.tela}</h6>}*/}
                    <h6>{item.description}</h6>

                </div>

                 

                {/* Solo renderizo el detalle tecnico si es que existe
                    Algunos productos no cuentan con detalle tecnico pero si con una descripción */}
              {/*  {
                    item.details !== undefined && <TechInfo item={item} />
                }*/}
                
            </div>
        </div>
    ) 
        


}

export default ItemDetail
