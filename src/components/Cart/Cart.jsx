import React,{useContext} from 'react';

//CSS particular
import './Cart.css';

//Context
import {CartContext} from '../../context/cartContext';

//Routing
import { Link } from 'react-router-dom';

//Components
import CartItem from '../CartItem/CartItem';


const Cart = () => {

    const { cart, total, deleteItem }= useContext(CartContext);
    /* localStorage.setItem('CartLocal', cart) */


    if (cart.length !== 0) {

        return (
            <div className="cart-container">
                <div className="cart">
                    <div className="cart-columns">
                        <p></p>
                        <p>Imagen</p>
                        {/*<p className="truncate">Codigo</p>*/}
                        <p>Cantidad</p>
                        <p>Valor</p>
                        <p>Total</p>
                    </div>
                    <div className="cart-items">
                        {
                            cart.map( ({ codigo, quantity, precio, description }) =>(
                                <CartItem key={String(precio+232)} 
                                codigo={codigo} description={description} quantity={quantity} precio={precio} 
                                 deleteItem={deleteItem}  />
                            ))
                        }
                    </div>
                    <div className="cart-total">
                        <p className="total-amount">
                        Subtotal ${ total }
                        </p>
                        <Link to="/ProvimexEcommerce/order" className="waves-effect btn">Finalizar compra</Link>
                    </div>
                </div>
            </div>
        )

    } else {
        return(
            <div className="cart-container-empty">
                <i className="material-icons empty-cart">shopping_cart</i>
                <h4 className="empty-cart-title">SU CARRITO ESTÁ VACIO <br/> </h4>
                <Link to="/ProvimexEcommerce/"><button className="waves-effect waves-light btn backToLanding-btn">Volver a la tienda</button></Link> 
            </div>
        )
    }


}

export default Cart;
