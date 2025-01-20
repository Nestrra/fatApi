import { CartResponse, ProductsResponse } from '../../../interfaces/appInterfaces';

 export const filterProducts = (products:ProductsResponse[], carts:CartResponse[]) => {
   
    return carts.map(cart => {
        // Añadir los detalles de los productos encontrados en la lista
        const updatedProducts = cart.products
          .map(cartProduct => {
            // Buscar el producto en la lista por productId
            const product = products.find(p => p.id === cartProduct.productId);
    
            // Si se encuentra el producto, agregamos los detalles
            if (product) {
              return {
                ...product,               // Propiedades del producto
                quantity: cartProduct.quantity  // Agregar la cantidad del pedido
              };
            }
    
            // Si el producto no se encuentra, no lo añadimos
            return null;
          })
          .filter(product => product !== null);  // Filtramos los productos nulos
    
        // Devolver el pedido con los productos actualizados
        return {
          ...cart,
          products: updatedProducts  // Añadir los productos actualizados
        };
      });
  }