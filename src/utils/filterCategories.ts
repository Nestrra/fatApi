import { ProductsResponse } from "../interfaces/appInterfaces";

export const filterProductsByCategory = (category: string, products:ProductsResponse[]) => {
    console.log(category)
    if (!category) return products; // Si no hay categoría seleccionada, devuelve todos los productos
    return products.filter((product) => product.category === category); // Filtra por categoría
  };