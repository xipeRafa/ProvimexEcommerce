//Hooks
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
//Components
import ItemList from '../ItemList/ItemList'
import Loader from '../../Loader/Loader';

//Firestore
import db from '../../../firebase/firebaseConfig';

//Particular CSS
import './ItemListContainer.css'

 import {useLocation} from 'react-router-dom'




const ItemListContainer = () => {


    const { pathname } = useLocation();

    const {categoryId} = useParams();//Categoria definida en ruta para saber que productos filtrar

    const [items, setItems] = useState([]);

    console.log(items)

    localStorage.setItem('arrItems', JSON.stringify(items))











    useEffect(() => {

        let isMounted = true;

      /*   const db = getFirestore(); */
        const itemCollection = collection(db, "inventario");

        getDocs(itemCollection).then(( querySnapshot ) => {

            if(isMounted){

                if(querySnapshot.size === 0 ) {
                    console.log('No results!')
                }
    
                const documents = querySnapshot.docs.map( doc => ( {id: doc.id, ...doc.data()} ) )
                setItems( documents ) ;
                //console.log(documents)
               
            }
        })
        .catch(err => {
            console.log('Error searching items', err );
        });

        return () => {
            isMounted = false; 
        };

    },[]);





        // useEffect(() => {
        //     window.scrollTo(0,250);
        // }, [paginationState]);


        // useEffect(() => {
        //     setPaginationState(0)
        // }, [pathname]);

      
          const[sliceState, setSliceState]=useState(0)
          let prodByPage = 20;
          const[sliceAlert, setSliceAlert]=useState('')
                                      

      




        return(

        (items.length > 0) ? <>
            
            <div className="item-list-container">  
                    <ItemList items={items.slice(sliceState, sliceState + prodByPage)} />  
            </div>


            <div className='btn-pagination'>

                    <button className={sliceState === 0 ? 'd-none' : 'siguiente'} onClick={()=>{
                                                                  if(sliceState > 0){
                                                                      setSliceState(sliceState - prodByPage)
                                                                      window.scrollTo(0,350)
                                                                    }
                                                                  }
                                                                }>
                                                                    ⇦ Anterior
                    </button>  



                    <button className={sliceState === prodByPage || sliceState === 0 ? 'd-none' : 'siguiente'} onClick={()=>{ 
                                                                                                        setSliceState(0)
                                                                                                        window.scrollTo(0,350) 
                                                                                                    }
                                                                                                  }>
                                                                                                      ０
                    </button>   



                    <button className='btn-pagination' onClick={()=>{ 
                                    if(items.filter(el => el).length > sliceState + prodByPage){
                                        setSliceState(sliceState + prodByPage) 
                                        window.scrollTo(0,350) 
                                    }else{
                                        setSliceAlert(' No hay mas Productos en esta Lista')
                                        setTimeout(()=>{
                                            setSliceAlert('')
                                        },2500)
                                    }
                                }
                    }>
                            Siguiente ⇨ 
                    </button>  


                    <span className='sliceAlert'>{sliceAlert}</span>



            </div>

                <div className='infoSliceContainer'>
                        <p className='sliceButtonsP'>De: {sliceState + 1} a: {items.length > sliceState + prodByPage ? sliceState + prodByPage : items.length}</p>
                        <p className='sliceButtonsP'>Paginas de {prodByPage} Productos c/u. {items.length} en Total</p>                 
                </div>


        </>

                :(<Loader/>)

        )

}

export default ItemListContainer;
