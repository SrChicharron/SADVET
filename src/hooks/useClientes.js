import react, { useState, useEffect } from "react";
import axios from "axios";

export const useGetClientes = (url) => {
    // Uso de useState para guardar los datos de la API
    const [cliente, setCliente] = useState([]);

    // Uso de useEffect para consumir la API
    useEffect ( () => {
        const getClientes = async () => {
          const response = await axios(url);
          setCliente(response.data);
        };
        getClientes();
      }, [url]);
    return cliente;
}

export const useGetMascotasByCliente = (url, idCliente) => {
  // Uso de useState para guardar los datos de la API
  const [mascota, setMascota] = useState([]);

  // Uso de useEffect para consumir la API
  useEffect ( () => {
      const getMascotas = async () => {
        const response = await axios(url+idCliente);
        setMascota(response.data);
      };
      getMascotas();
    }, [url]);
  return mascota;
}

// FUNCIÓN PARA DAR DE ALTA MASCOTAS
export const useAddCliente = (url, clientes) => {
    // Uso de useState para guardar los datos de la API
    const [cliente, setCliente] = useState([]);

    // Uso de useEffect para consumir la API
    useEffect(() => {
        const crearCliente = async () => {
          const response = await axios.post(url, clientes);
          setCliente(response.data);
        };
        crearCliente();
      }, [url, clientes]);
    return cliente;
}

// FUNCIÓN PARA EDITAR CLIENTE
export const useEditCliente = (url, clientes) => {
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        const editarCliente = async () => {
          const response = await axios.put(url, clientes);
          setCliente(response.data);
        };
        editarCliente();
      }, [url, clientes]);
    return cliente;
}


// FUNCIÓN PARA ELIMINAR CITAS
export const useDeleteCliente = (url, clientes) => {
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        const eliminarCliente = async () => {
          const response = await axios.delete(url, clientes);
          setCliente(response.data);
        };
        eliminarCliente();
      }, [url, clientes]);
    return cliente;
}



const clientes = {
    useGetClientes,
    useGetMascotasByCliente,
    useAddCliente,
    useEditCliente,
    useDeleteCliente
};

export default clientes;