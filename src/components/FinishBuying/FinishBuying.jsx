import React from 'react';
//Routing
import { Link } from 'react-router-dom'
//CSS particular
import './FinishBuying.css'

const FinishBuying = () => {
    return (

        <div className="finish-buying">
            <Link to="/ProvimexEcommerce/cart" 
                className="waves-effect btn"    onClick={()=>{

                                                    setTimeout(()=>{
                                                        window.scrollTo(0,250)
                                                    },100)     

                                                }}>
                Ir al carrito
                <i className="material-icons cart">shopping_cart</i>
            </Link>
         </div>

    )
}

export default FinishBuying
