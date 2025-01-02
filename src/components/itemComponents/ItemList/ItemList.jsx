import React from 'react';

//Components
import Item from '../Item/Item';

//Particular CSS
import './ItemList.css';

const ItemList = ({ items }) => {


    return (
        
        <div className="ItemList">
            { items.map( p =>
                <Item
                    key={p.id}
                    id={p.id} 
                    codigo={p.codigo} 
                    di={p.di} 
                    de={p.de}  
                    ancho={p.ancho}
                    precio={p.precio}
                    description={p.description}
                />)
            }
        </div>
    )
}

export default ItemList
