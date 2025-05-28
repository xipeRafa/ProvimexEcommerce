//Hooks
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

//Components
import ItemList from '../ItemList/ItemList'
import Loader from '../../Loader/Loader';



//Particular CSS
import './ItemListContainer.css'

 import {useLocation} from 'react-router-dom'




const ItemListContainer = ({items}) => {





    const { pathname } = useLocation();

    const {categoryId} = useParams();//Categoria definida en ruta para saber que productos filtrar




    


    // let arrDB
    // if(localStorage.arrItems === undefined || localStorage.arrItems === '[]'){
    //         arrDB = []
    //         setTimeout(()=>{
    //             localStorage.setItem('arrItems', JSON.stringify(items))
    //         },1222)

    //         setTimeout(()=>{
    //             location.reload()
    //         },2222)
    // }else{
    //         arrDB = JSON.parse(localStorage.arrItems)
    // }







        // useEffect(() => {
        //     window.scrollTo(0,250);
        // }, [paginationState]);


        // useEffect(() => {
        //     setPaginationState(0)
        // }, [pathname]);

      
          const[sliceState, setSliceState]=useState(0)
          let prodByPage = 20;
          const[sliceAlert, setSliceAlert]=useState('')
                                      

        const[diState, setDiState]=useState()
        const[deState, setDeState]=useState()
        const[anchoState, setAnchoState]=useState()



        return(

        (localStorage.arrItems) ? <>

        <form className='filters'>
        {/*  <label>Codigo:</label>
          <input type='text' value={2} />*/}

            <label>Diametro Interior:
                    <input type='number' min='0'  onChange={(e)=>{

                        setDiState(Number(e.target.value))

                        // if(String(diState).charAt(0) == 0){
                        //     setDiState(Number(String(e).charAt(0).slice(0)))
                        // }
      
                    }}/>
            </label>
            
            <label>Diametro Exterior:
                    <input type='number' min='0' onChange={(e)=>{
                          setDeState(Number(e.target.value))

                        // if(String(deState).charAt(0) == 0){
                        //     setDeState(Number(String(e).charAt(0).slice(0)))
                        // }
                    }}/>
            </label>

            <label>Altura:
                    <input type='number' min='0' onChange={(e)=>{
                          setAnchoState(Number(e.target.value))

                        // if(String(anchoState).charAt(0) == 0){
                        //     setAnchoState(Number(String(e).charAt(0).slice(0)))
                        // }
                    }}/>
            </label>

            
                 <input type='reset' 
                    style={{marginTop:'18px', backgroundColor:'transparent', border:'1px solid gray'}}
                    value='RESET ↻' 
                    onClick={()=>{
                        // location.reload()
                        setDiState()
                        setDeState()
                        setAnchoState()
                    }
                }
                />
        </form>
           
            <div className="item-list-container2">  
                    <ItemList items={JSON.parse(localStorage.arrItems)
                    .filter(el => el.di == diState)
                    .filter(el => el.de == deState)
                    .filter(el => el.ancho == anchoState)
                    .filter(el => el.ancho !== '')
                    .filter(el => el.ancho !== 0)
                    .filter(el => el.di !== '')
                    .filter(el => el.di !== 0)
                    // .slice(sliceState, sliceState + prodByPage)
                } />  
            </div>

            <div className="item-list-container">  
                    <ItemList items={JSON.parse(localStorage.arrItems)
                    .slice(sliceState, sliceState + prodByPage)} />  
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



                    <button className={
                        sliceState === prodByPage || sliceState === 0 ? 'd-none' : 'siguiente'} 
                        onClick={()=>{ 
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
                        <p className='sliceButtonsP'>
                            De: {sliceState + 1} 
                            a: {items.length > sliceState + prodByPage ? sliceState + prodByPage : items.length}</p>
                        <p className='sliceButtonsP'>Paginas de {prodByPage} Productos c/u. {items.length} en Total</p>                 
                </div>


        </>

                :(<Loader/>)

        )

}

export default ItemListContainer;
