import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //aqui hacemos el efecto para q solo se dispare cuando cambie la categoria
    useEffect(() => {
        //hacemos la peticion http
        //.then tenemos las imagenes
        getGifs( category )
        .then( imgs =>{
            
            setState({
             data: imgs,
             loading: false
            });

        })
        
    }, [category])

    // setTimeout( () => {
    //     setState({
    //         data: [1, 2, 3, 4],
    //         loading: false 
    //     })
    // },3000);

    return state; //{ data:[], loading: true };

}