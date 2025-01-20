import  { useState } from 'react'
import { addNuewProduct, deleteProductForId, updateProduct } from '../../../services/products'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { toast } from 'react-toastify'
import { productsList } from '../../../redux/slices/productsSlice'


export const useCrudProduct = () => {

    const { products } = useAppSelector((state) => state.productsReducer)
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()



    const newProduct = async (data: any) => {
      

        setLoading(true)

        const dataApi ={
            title: data.title,
            price: data.price ,
            description: data.description,
            image: data.image,
            category: data.category
        }


        try {


           const response =  await addNuewProduct(dataApi)  

     

            const existingProductIndex = products!.findIndex((product) => product.id === response.data.id);
       
            if (existingProductIndex !== -1) {

                const updatedProduct = {
                    ...response.data,
                    id: products![products!.length - 1].id + 1,

                };
                const updatedProducts = [...products!, {...updatedProduct, rating: {
                    rate:parseFloat(data.rate) ,
                    count:parseFloat(data.count) 
                }} ];

         
                dispatch(productsList(updatedProducts))
                localStorage.setItem('products', JSON.stringify(updatedProducts));
                toast.success(  'Producto creado de manera correcta ')
                setLoading(false)
            } else {
                const updatedProducts = [...products!, {...response.data, rating: {
                    rate: 0,
                    count: 0
                }}];
             
                dispatch(productsList(updatedProducts))
                localStorage.setItem('products', JSON.stringify(updatedProducts));
                toast.success( 'Producto creado de manera correcta ')
                setLoading(false)
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('')
            setLoading(false)
        }
    }



    const upDProduct = async (data: any, id: number) => {

        setLoading(true);

        const dataApi = {
            title: data.title,
            price: data.price,
            description: data.description,
            image: data.image,
            category: data.category,
        };
    
        try {
          
            const response = await updateProduct(id, dataApi);
    
        
            const updatedProduct = {
                ...response.data,
                rating: {
                    rate: parseFloat(data.rate),
                    count: parseFloat(data.count),
                },
            };
    
         
            const updatedProducts = products!.map((product) =>
                product.id === id ? updatedProduct : product
            );
    
        
            dispatch(productsList(updatedProducts))
            localStorage.setItem('products', JSON.stringify(updatedProducts));    
              
            toast.success('Producto actualizado de manera correcta');
            setLoading(false);
    
        } catch (error) {
            console.error('Error updating product:', error);
            toast.error('Error al actualizar el producto');
            setLoading(false);
        }
    };
    

    
    const deleteProduct = async (id: number, handleClose:any) => {
        setLoading(true);
    
        try {
           
            const response = await deleteProductForId(id)
    
            if (response) {
               
                const updatedProducts = products!.filter((product) => product.id !== id);    
              
                localStorage.setItem('products', JSON.stringify(updatedProducts));
    
                dispatch(productsList(updatedProducts))
                 
                toast.success('Producto eliminado correctamente');
                handleClose()
                setLoading(false);
            } else {
                throw new Error('Error al eliminar el producto en la API');
            }
    
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Error al eliminar el producto');
            handleClose()
            setLoading(false);
        }
    };
    


    return {
        newProduct,
        upDProduct,
        deleteProduct,
        loading

    }
}
