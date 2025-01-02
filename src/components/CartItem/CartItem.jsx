import React from 'react';

//Css particular
import './CartItem.css'

const CartItem = ({codigo, quantity, precio, imgUrl , deleteItem }) => {

    return (
        <>
            <div className="cart-item ">
                <i onClick={ ()=> deleteItem(codigo) } className="material-icons delete-item item" >cancel</i>
               {/* <div  className="item-img item" style={{backgroundImage: `url(${imgUrl})`}}>

                </div>*/}  

                 <div  className="item-img item" style={{backgroundImage:`url("https://http2.mlstatic.com/D_NQ_NP_2X_645063-MLM76032781605_042024-F.webp")`}}>

                </div>



                <div className="item-name item">
                    {codigo}
                </div>
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
