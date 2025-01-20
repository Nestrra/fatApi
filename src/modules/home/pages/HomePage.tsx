import { Grid } from '@mui/material'
import { useProducts } from '../hooks/useProducts'
import { useAppSelector } from '../../../redux/hooks'
import { ProductsResponse } from '../../../interfaces/appInterfaces'
import { AsaideFilter, CardProduct, SkeletonG } from '../components'
import { filterAndSortProducts } from '../../../utils/filterCategories'
import { useEffect, useState } from 'react'




export const HomePage = () => {
  const { products, categories } = useAppSelector((state) => state.productsReducer)
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortByRating, setSortByRating] = useState<'asc' | 'desc'>('asc');
  const { loading } = useProducts()

 
  const filteredProductsd = filterAndSortProducts(products!, selectedCategory, sortOrder, sortByRating);
  

      console.log(filteredProductsd)

      useEffect(() => {
       
      }, [selectedCategory, sortOrder, sortByRating])
      



  return (
    <>
      <Grid container  bgcolor={'#fafafa'} >
        <Grid
        
          p={2}         
          item
          md={2}
          sm={0}
        >
          <AsaideFilter setSortByRating={setSortByRating} setSortOrder={setSortOrder} categories={categories} setSelectedCategory={setSelectedCategory} />
        </Grid>
        <Grid
          p={5}
          item
          md={9.8}
          xs={12}
        >
          {
            loading ?
              <SkeletonG /> : <>
                <Grid container spacing={2} p={2} >
                  {filteredProductsd && filteredProductsd!.map((product: ProductsResponse, index) => (
                    <Grid
                      key={index}
                      item
                      xl={3}
                      md={4}
                      sm={6}
                      xs={12}
                    >
                      <CardProduct {...product} />
                    </Grid>
                  ))}
                </Grid>
              </>
          }
        </Grid>
      </Grid>
    </>
  )
}
