import { ProductsResponse } from "../interfaces/appInterfaces";


export const sortProductsByPrice = (order: 'asc' | 'desc', products:ProductsResponse[]) => {
    return products.slice().sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price; // Orden ascendente (menor a mayor)
      } else {
        return b.price - a.price; // Orden descendente (mayor a menor)
      }
    });
  };