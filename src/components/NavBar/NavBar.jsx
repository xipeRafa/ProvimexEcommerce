import React from 'react';

//Components
import CartWidget from "../CartWidget/CartWidget";

//Particular Css
import './NavBar.css';
import logo from '../../imgs/polanco/provimex.webp'
//Routing
import {NavLink} from 'react-router-dom'


const NavBar = () => {

    return (
        <>  
            <nav id='nav'>
                <div className="nav-wrapper">
                    {/* El atributo exact hace que el router busque exactamente la ruta / y no todas las q empiezen con / */}
                    <NavLink to="/ProvimexEcommerce" className="brand-logo" >
                        <img src={logo} alt="provimex" />
                    </NavLink>
                    <a data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/ProvimexEcommerce" className="navlink inicio"> INICIO </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ProvimexEcommerce/categories/ARTS1" className="navlink">ARTS 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ProvimexEcommerce/categories/ARTS2" className="navlink"> ARTS 2 </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ProvimexEcommerce/my-orders" className="navlink " > PEDIDOS </NavLink>
                        </li>
                    {/*    <li>
                            <NavLink to="/polancoEcommerc/accesorios" className="navlink" > ACCESORIOS </NavLink>
                        </li>*/}
                    </ul>
                    {/* Icono de carrito de compras */}
                    <CartWidget />
                </div>
            </nav>
            {/* Mismo menu pero cuando esta colapsado para mobile */}
            <ul className="sidenav sidenav-close" id="mobile-demo" >
                <li>
                    <NavLink to="/ProvimexEcommerce" className="navlink">INICIO</NavLink>
                </li>
                <li>
                    <NavLink to="/ProvimexEcommerce/categories/ARTS1" className="navlink"> ARTS 1 </NavLink>
                </li>
                <li>
                    <NavLink to="/ProvimexEcommerce/categories/ARTS2" className="navlink"> ARTS 2 </NavLink>
                </li>
                <li>
                    <NavLink to="/ProvimexEcommerce/my-orders" className="navlink" > PEDIDOS </NavLink>
                </li>
              {/*  <li>
                    <NavLink to="/polancoEcommerc/accesorios" className="navlink" > ACCESORIOS </NavLink>
                </li>*/}
            </ul>
        </>
    )
};

export default NavBar;
