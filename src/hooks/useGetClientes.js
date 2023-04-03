import React, {useState,useEffect} from 'react';
import axios from "axios"

const useGetClientes = (apiGetClientes) => {
    
        const [allClientes,setAllClientes]=useState([]);

        useEffect(async()=>{
            const response=await axios(apiGetClientes)
            setAllClientes(response.data)
        }, [])
        return allClientes;

    
}

export default useGetClientes;