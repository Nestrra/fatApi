import { Box, Container, Typography } from "@mui/material"
import { IconBTN } from "../../../components"
import { FormProduct } from "./FormProduct"
import { useLocation } from "react-router-dom";



export const NewProduct = () => {

    const location = useLocation();
    const product = location.state?.item ? location.state?.item : null;
    const edit = location.state?.edit ? location.state?.edit : false;



  return (
    <Container>
         <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}

            >
                <IconBTN />
                <Typography mt={3} variant="h4" >
                    Administración de productos
                </Typography>
            </Box>

        <Box

            sx={{
                
                mt:2,
                p:2,
                backgroundColor:'white',
                borderRadius:8
            }}
        >
            
            
                    <FormProduct product={product} edit={edit} />
                
            
                

        </Box>

    </Container>
  )
}
