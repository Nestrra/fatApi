import { Grid } from '@mui/material'
import { useProducts } from '../hooks/useProducts'
import { useAppSelector } from '../../../redux/hooks'
import { ProductsResponse } from '../../../interfaces/appInterfaces'
import { AsaideFilter, CardProduct, SkeletonG } from '../components'




export const HomePage = () => {
  const { products } = useAppSelector((state) => state.productsReducer)
  const { loading } = useProducts()


  return (
    <>
      <Grid container  bgcolor={'#fafafa'} >
        <Grid
        
          p={2}         
          item
          md={2}
          sm={0}
        >
          <AsaideFilter />
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
                  {products && products!.map((product: ProductsResponse, index) => (
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
