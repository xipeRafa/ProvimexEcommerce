import React from 'react';

//Css particular
import './CartItem.css'



   import unoImg from '../../imgs/baleros/1.jpg'
import unoUnoImg from '../../imgs/baleros/11.jpg'

import dosImg from '../../imgs/baleros/2.jpg'
import dosDosImg from '../../imgs/baleros/22.jpg'

import tresImg from '../../imgs/baleros/3.jpg'
import cuatroImg from '../../imgs/baleros/4.jpg'
import cincoImg from '../../imgs/baleros/5.jpg'

import seisImg from '../../imgs/baleros/6.jpg'


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

const CartItem = ({codigo, quantity, precio, deleteItem, description }) => {

    return (
        <>
            <div className="cart-item ">
                <i onClick={ ()=> deleteItem(codigo) } className="material-icons delete-item" >cancel</i>

                 <div  className="item-img item">
                          <img src={imgsObj[description]} alt="imagen"/>
                </div>



              {/*  <div className="item-name item">
                    {codigo}
                </div>*/}
                <div className="item-quantity item">
                    {quantity}
                </div>
                <div className="item-value item">
                    $ {precio}
                </div>
                <div className="item-totalValue item">
                    $ {Number(quantity) * Number(precio)}
                </div> 
            </div>
            <hr/> 
        </>
    )
}

export default CartItem
