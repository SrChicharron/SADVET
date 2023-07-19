import react, { useState, useEffect } from "react";
import axios from "axios";

export const useGetCatalogo = (url) => {
    // Uso de useState para guardar los datos de la API
    const [catalogo, setCatalogo] = useState([]);

    // Uso de useEffect para consumir la API
    useEffect (() => {
        const getCatalogo = async () => {
          const response = await axios(url);
          setCatalogo(response.data);
        };
        getCatalogo();
      }, [url]);
    return catalogo;
}

const catalogos = {
    useGetCatalogo,
};

export default catalogos;