import { ProductsResponse } from "../interfaces/appInterfaces";

export const filterProductsByCategory = (category: string, products:ProductsResponse[]) => {
    console.log(category)
    if (!category) return products; // Si no hay categoría seleccionada, devuelve todos los productos
    return products.filter((product) => product.category === category); // Filtra por categoría
  };


  export const filterAndSortProducts = (
    products: ProductsResponse[],
    selectedCategory: string,
    sortOrder: 'asc' | 'desc',
    sortByRating: 'asc' | 'desc'
  ): ProductsResponse[] => {

    console.log(sortOrder)

    let filteredProducts = products;

    // Filtrar productos por categoría si está seleccionada
    if (selectedCategory) {
      filteredProducts = products.filter((product) => product.category === selectedCategory);
    }

    // Ordenar los productos filtrados por calificación o precio
    return filteredProducts.slice().sort((a, b) => {
      // Si el usuario seleccionó ordenar por calificación
      if (sortByRating === 'asc') {
        return a.rating.rate - b.rating.rate; // Orden ascendente por calificación
      } else if (sortByRating === 'desc') {
        return b.rating.rate - a.rating.rate; // Orden descendente por calificación
      }

      // Si el usuario no seleccionó ordenar por calificación, ordenamos por precio
      if (sortOrder === 'asc') {
        return a.price - b.price; // Orden ascendente por precio (menor a mayor)
      } else {
        return b.price - a.price; // Orden descendente por precio (mayor a menor)
      }
    });
  };