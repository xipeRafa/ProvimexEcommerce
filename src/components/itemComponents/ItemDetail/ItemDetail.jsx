import React, { useState } from 'react';

//Particular CSS
import './ItemDetail.css';

//Components
import ItemCount from '../ItemCount/ItemCount';
import FinishBuying from '../../FinishBuying/FinishBuying';
import TechInfo from '../../TechnInfo/TechInfo';


const ItemDetail = ({item}) => {

console.log(item)
    const [ bigImg, setBigImg ] = useState('');
    const [ isAdded, setIsAdded ] = useState(false);


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


                



                 <div  className="big-image" style={{backgroundImage:`url("https://http2.mlstatic.com/D_NQ_NP_2X_645063-MLM76032781605_042024-F.webp")`}}>

                </div>
                    </div>



                     <ItemCount isAdded={isAdded} setIsAdded={setIsAdded} initial={1} stock={Number(item.stockHermosillo) + Number(item.stockSanCarlos)} item={item} /> 
                    {
                        isAdded 
                            && 
                        <FinishBuying/>
                    } 
                </div>
            </div>
            <div className="container-two">


                <div className="title-price">
 
                    <h4 className="item-name">{item.codigo}</h4>
                    <h4>$ {item.precio}</h4>
                    <p>Dia Int: {item.di}</p>
                    <p>Dia Ext: {item.de}</p>
                    <p>Ancho: {item.ancho}</p>
                {/*    <p>
                        STOCK   {item?.stockSanCarlos < 1 ? <b className='bg-red'>Sin Stock </b> : item?.stockSanCarlos }
                                {item?.stockHermosillo < 1 ? <b className='bg-red'>Sin Stock</b> : item?.stockHermosillo}
                    </p>
                    <small>COD: { item.id}</small>*/}

                 {/*   <span className={item.name === 'Accesorio' ? 'd-nonde' : 'tallasArr' }>Tallas:</span>
                    <div className={item.name === 'Accesorio' ? 'd-nonde' : 'tallasArr' }>
                        {item.talla?.map((el,i)=>(
                            <b className='tallasB' key={i}>{el}</b>
                        ))}
                    </div> */}     

                    {/*{item.name === 'Accesorio' ? <h6>{item.description}</h6> : <h6>Tela {item.tela}</h6>}*/}
                    <h6>Descripción: {item.description}</h6>

                </div>

                 

                {/* Solo renderizo el detalle tecnico si es que existe
                    Algunos productos no cuentan con detalle tecnico pero si con una descripción */}
                {
                    item.details !== undefined && <TechInfo item={item} />
                }
                
            </div>
        </div>
    ) 
        


}

export default ItemDetail
