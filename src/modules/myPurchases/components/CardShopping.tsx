

import {  Card, CardContent, CardMedia, Divider, Grid,  Typography } from '@mui/material'
import { CartUser } from '../../../interfaces/appInterfaces'
import { LoadingBTN } from '../../../components'
import { useNavigate } from 'react-router-dom'
import { FormatPath } from '../../../utils/path'
import { formatDate } from '../../../utils/formatDate'

export const CardShopping = (cart: CartUser) => {

        const navigate = useNavigate()
        const date =  formatDate(cart.date) 

    return (
        <Card
            sx={{ mb: 1 }}
        >
            <Grid
                container
            >
                <Grid
                    item
                    md={12}
                    p={2}
                >
                    <Typography fontSize={18} color={'#77B254'} >
                        {date}
                    </Typography>
                    <Divider sx={{ mb: 1 }} />
                </Grid>


                {
                    cart.products.map(product => (

                        <Grid
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            container
                            key={product.id}
                            p={1}
                            item
                        >
                            <Grid
                                border={1}
                                borderColor={'#F5F5F5'}
                                p={0.5}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}

                                item
                                md={1.5}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ width: 50 }}
                                    image={product.image}
                                    alt={product.title}
                                />
                            </Grid>
                            <Grid

                                item
                                md={8}
                            >
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" >
                                        {product.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component="div"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {product.quantity}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}

                                item
                                md={2}
                            >
                                <LoadingBTN variant='outlined' onClick={()=>navigate(`/product/${FormatPath(product.title)}/${product.id}`)} isloading={false} title={"Ver Producto"} />
                            </Grid>
                        </Grid>


                    ))
                }


            </Grid>
        </Card>
    )
}
