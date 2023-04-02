import react, { useState, useEffect } from "react";
import axios from "axios";

export const useGetCitas = (url) => {
    // Uso de useState para guardar los datos de la API
    const [citas, setCitas] = useState([]);

    // Uso de useEffect para consumir la API
    useEffect ( () => {
        const getCitas = async () => {
          const response = await axios(url);
          setCitas(response.data);
        };
        getCitas();
      }, [url]);
    return citas;
}

// FUNCIÓN PARA DAR DE ALTA CITAS
export const useAddCita = (url, citas) => {
    // Uso de useState para guardar los datos de la API
    const [cita, setCita] = useState([]);

    // Uso de useEffect para consumir la API
    useEffect(() => {
        const crearCita = async () => {
          const response = await axios.post(url, citas);
          setCita(response.data);
        };
        crearCita();
      }, [url, citas]);
    return cita;
}

// FUNCIÓN PARA EDITAR CITAS
export const useEditCita = (url, citas) => {
    const [cita, setCita] = useState([]);

    useEffect(() => {
        const editarCita = async () => {
          const response = await axios.put(url, citas);
          setCita(response.data);
        };
        editarCita();
      }, [url, citas]);
    return cita;
}


// FUNCIÓN PARA ELIMINAR CITAS
export const useDeleteCita = (url, citas) => {
    const [cita, setCita] = useState([]);

    useEffect(() => {
        const eliminarCita = async () => {
          const response = await axios.delete(url, citas);
          setCita(response.data);
        };
        eliminarCita();
      }, [url, citas]);
    return cita;
}



const citas = {
    useGetCitas,
    useAddCita,
    useEditCita,
    useDeleteCita
};

export default citas;