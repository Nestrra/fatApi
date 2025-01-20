import { Box, Container, Grid, Typography } from '@mui/material';
import { useProductDetail } from "../hooks/useProductDetail"
import {  useParams } from "react-router-dom"
import { SkeletonDetail } from "../components/SkeletonDetail"

import { IconBTN} from '../../../components';
import { CardProductDetail } from '../components/CardProductDetail';


export const ProductDetailPage = () => {

  const { id } = useParams() 
  const { loading, product, error } = useProductDetail(parseInt(id!))


  return (

    <>
      <Container maxWidth='xl' >
        <IconBTN />
        {
          loading ? <SkeletonDetail /> :
            <Grid

              mt={2}
              container
            >

              {
                error ?
                  <>
                    <Box
                      width={'100%'}
                    >
                      <Typography fontWeight={'bold'} variant='h2' color={'#E4E0E1'} textAlign={'center'} >
                        Producto no encontrado
                      </Typography>
                    </Box>

                  </>
                  :
                  <>
                    {
                      product && (
                        <>
                          <CardProductDetail {...product} />
                        </>
                      )
                    }
                  </>

              }


            </Grid>
        }

      </Container>


    </>




  )
}
