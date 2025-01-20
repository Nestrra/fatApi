
import { Box, CardMedia, Chip, Divider, Grid, Rating, Typography } from '@mui/material';
import { LoadingBTN } from '../../../components';
import { ProductsResponse } from '../../../interfaces/appInterfaces';

export const CardProductDetail = (product:ProductsResponse) => {
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
                              fullWidth
                              fontSize={18}
                              isloading={false}
                              title={'Comprar ahora'} />
                          </Grid>
    </>
  )
}
