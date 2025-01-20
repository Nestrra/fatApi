import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { singleProduct } from "../../../services/products";
import { ProductsResponse } from "../../../interfaces/appInterfaces";


export const useProductDetail = (id:number) => {
  
    const [product, setProduct] = useState<ProductsResponse>(); 
    const [loading, setloading] = useState<boolean>(false)   
    const [error, setError] = useState<string | null>(null);  
    const { products } = useAppSelector((state) => state.productsReducer);  


    useEffect(() => {
        fetchProduct()
    }, [id])
    
 
    const fetchProduct = async () => {

        setloading(true)

        try {
          const response = await singleProduct(id)
          
          if (response.data) {
            setProduct(response.data);  
            setError(null);  
            setloading(false)
          } else {
            setloading(false)
            throw new Error('Producto no encontrado en la API');
            
          }
        } catch (err) {
          // Si no hay respuesta o error de API, buscar en el estado global
          console.error('Error de API:', err);
          const foundProduct = products!.find((item:ProductsResponse) => item.id === id);
          
          if (foundProduct) {
            setProduct(foundProduct);  
            setError(null);
            setloading(false)
          } else {
            setError('Producto no encontrado');  
            setloading(false)
          }
        }
      };
  
      return {

        product,
        error,
        loading

      }
    };
  
  
   

