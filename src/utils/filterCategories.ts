import { ProductsResponse } from "../interfaces/appInterfaces";

export const filterProductsByCategory = (category: string, products:ProductsResponse[]) => {

    if (!category) return products; 
    return products.filter((product) => product.category === category); 
  };


  export const filterAndSortProducts = (
    products: ProductsResponse[],
    selectedCategory: string,
    sortOrder: 'asc' | 'desc',
    sortByRating: 'asc' | 'desc'
  ): ProductsResponse[] => {

   

    let filteredProducts = products;

 
    if (selectedCategory) {
      filteredProducts = products.filter((product) => product.category === selectedCategory);
    }

  
    return filteredProducts.slice().sort((a, b) => {

      if (sortByRating === 'asc') {
        return a.rating.rate - b.rating.rate; 
      } else if (sortByRating === 'desc') {
        return b.rating.rate - a.rating.rate; 
      }

     
      if (sortOrder === 'asc') {
        return a.price - b.price; 
      } else {
        return b.price - a.price; 
      }
    });
  };