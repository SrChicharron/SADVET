import React from 'react';
import "@styles/ProductoLista.scss"
import ProductoItem from '@components/ProductoItem';
const ProductosLista = ({showModal, productos, productoEdit, setProductoEdit, onDelete}) => {
    return (
        <section className="main-container">
         
                <div className="cards-container">
                    

                    {productos.map(producto=>{
                        return <ProductoItem 
                        key = {producto.id}
                        idProducto = {producto.id}
                        producto = {producto}
                        productoEdit = {productoEdit}
                        setProductoEdit= {setProductoEdit}
                        handleClose={handleClose}
                        onDelete={onDelete}
                        />
                    })}
                    
                </div>
        </section>
    );
}

export default ProductosLista;