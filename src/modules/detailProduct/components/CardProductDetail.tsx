
import { Box, CardMedia, Chip, Divider, Grid, Rating, Typography } from '@mui/material';
import { LoadingBTN } from '../../../components';
import { CartUser, ProductsResponse } from '../../../interfaces/appInterfaces';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useShopping } from '../../myPurchases/hooks/useShopping';
import { carts as cartsList } from "../../../redux/slices/myPurchasesSlice"
import { toast } from 'react-toastify';

export const CardProductDetail = (product:ProductsResponse) => {
   const { carts } = useAppSelector((state) => state.cartsReducer)
   const { user } = useAppSelector((state) => state.authReducer)
    const {}= useShopping()
  const dispatch = useAppDispatch()
  const [loading, setloading] = useState(false)

 

  const handleOnClick = ()=>{
    setloading(true)
    const prod = {
       id:          product.id,
          title:       product.title,
          price:       product.price,
          description: product.description,
          category:    product.category,
          image:       product.image,
          rating:      {
            rate:  product.rating.rate,
            count: product.rating.count
          },
          quantity:  1,
      
    }

   

    const maxId = carts!.reduce((max, cart) => Math.max(max, cart.id), 0);

   
    const newId = maxId + 1;
  
    // Paso 3: Crear el nuevo carrito con el id generado
    const newCart:any = {
      id: newId,
      userId: user!.id,
      date: new Date().toISOString(),
      products: [prod],
      __v: 0
    };
    
    setTimeout(() => {
      
    const updatedCarts:CartUser[] = [...carts!, newCart];
     
    dispatch(cartsList(updatedCarts));
      
    localStorage.setItem('carts', JSON.stringify(updatedCarts));
      toast.success('Compra realizada de manera correcta')
      setloading(false)  
    }, 800);

    

  }

  return (
    <>
          <Grid
                            sx={{
                              boxShadow: '0px 4px 6px rgba(40, 40, 40, 0.13)',
                              borderRadius: '8px',
                              backgroundColor: 'white',

                            }}
                            mr={2}
                            item
                            md={8.5}
                          >

                            <Grid
                              container >
                              <Grid
                                p={1}
                                height={500}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                md={5}
                                item
                              >
                                <Box sx={{ bgcolor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 500, height: 300, overflow: 'hidden' }}> {/* Controlamos la imagen dentro del contenedor */}
                                  <CardMedia
                                    component="img"
                                    sx={{
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'contain',
                                      objectPosition: 'center',
                                    }}
                                    image={product!.image}
                                    alt={product!.title}
                                    loading="lazy"
                                  />
                                </Box>

                              </Grid>
                              <Grid
                                pr={1.2}
                                pl={5}
                                md={7}

                                item
                              >
                                <Typography
                                  mt={2.3}
                                  fontSize={22}
                                  fontWeight={'bold'}
                                > {product!.title} </Typography>
                                <Box
                                  mt={0.5}
                                  alignItems={'center'}
                                  display={'flex'}
                                  flexDirection={'row'}
                                >
                                  <Rating name="size-small" defaultValue={product.rating.rate} precision={0.1} size='small' readOnly />
                                  <span style={{ marginLeft: 3 }} > {product.rating.count} Reseñas</span>
                                </Box>
                                <Typography
                                  mt={2.3}

                                > {product!.description} </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid
                            sx={{
                              boxShadow: '0px 4px 6px rgba(40, 40, 40, 0.13)',
                              borderRadius: '8px',
                              backgroundColor: 'white',

                            }}
                            bgcolor={'white'}
                            p={4}
                            item
                            md={3}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'space-between'}
                          >
                            <Box>
                              <Box
                                display={'flex'}
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}  >
                                <Typography
                                  fontSize={28}
                                  fontWeight={'bold'}
                                > ${product!.price} </Typography>

                                <Chip style={{ backgroundColor: '#e2f2da', color: '#44782b' }} label="En stock" />

                              </Box>
                              <Box
                                mb={0.5}
                                pr={5}
                                mt={5}
                                display={'flex'}
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}  >
                                <Typography
                                  fontSize={16}
                                  fontWeight={'bold'}
                                > Código
                                </Typography>
                                <Typography
                                  fontSize={16}
                                  textAlign={'start'}
                                > {product.id}
                                </Typography>


                              </Box>
                              <Divider />
                              <Box
                                mb={0.5}
                                pr={5}
                                mt={3}
                                display={'flex'}
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}  >
                                <Typography

                                  fontSize={16}
                                  fontWeight={'bold'}
                                > Categoría
                                </Typography>
                                <Typography
                                  fontSize={16}
                                  textAlign={'start'}
                                > {product.category}
                                </Typography>


                              </Box>

                              <Divider />
                            </Box>




                            <LoadingBTN
                              onClick={handleOnClick}
                              fullWidth
                              fontSize={18}
                              isloading={loading}
                              title={'Comprar ahora'} />
                          </Grid>
    </>
  )
}
