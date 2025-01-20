
import { Card, CardMedia, CardContent, Typography, Box, Rating } from '@mui/material'
import { ProductsResponse } from '../../../interfaces/appInterfaces';
import { useNavigate } from 'react-router-dom';
import { FormatPath } from '../../../utils/path';


 

export const CardProduct = (product: ProductsResponse) => {


  const navigate = useNavigate()

    return (
        <Card component={'div'} onClick={()=>navigate(`/product/${FormatPath(product.title)}/${product.id}`)} sx={{ cursor:'pointer',  maxWidth: 345, height: 400, p:2 }}> 
            <Box bgcolor={'#FFFFFF'} sx={{ padding:1, width:  '100%', height: 200, overflow: 'hidden' }}> {/* Controlamos la imagen dentro del contenedor */}
                <CardMedia
                   component="img"
                   sx={{
                     width: '100%', 
                     height: '100%', 
                     objectFit: 'contain', 
                     objectPosition: 'center', 
                   }}
                   image={product.image}
                   alt={product.title}
                   loading="lazy"
                />
            </Box>
            <CardContent>
            <Typography 
                    variant="body1"
                    sx={{
                        color:'#ab5599',                       
                    mt:1,
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden',  
                      textOverflow: 'ellipsis', 
                    }}
                    fontSize={13} >
                    {product.category}
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        color:'#4b5966',
                       
                        mb:5,
                     fontWeight:'bold',
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden',  
                      textOverflow: 'ellipsis', 
                    }}
                    fontSize={16} >
                    {product.title}
                </Typography>
               
                <Rating name="size-small" defaultValue={product.rating.rate} precision={0.1} size="small" readOnly />
                <Typography
                color='black' 
                    variant="body1"
                    sx={{
                      mt:-1,
                        fontWeight:'bold',
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                    }}
                    fontSize={23} >
                    ${product.price}
                </Typography>
            </CardContent>
         
        </Card>

    )
}
