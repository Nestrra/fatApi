import { Box, Container, Typography } from "@mui/material"
import { IconBTN } from "../../../components"
import { useShopping } from "../hooks/useShopping"
import { SkeletonMyPurchases } from "../components/SkeletonMyPurchases"
import { useAppSelector } from "../../../redux/hooks"
import { CardShopping } from "../components/CardShopping"



export const MyPurchases = () => {
    
    const { carts } = useAppSelector((state) => state.cartsReducer)
    const {loading}= useShopping()


    return (

        <Container>
            <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}

            >
                <IconBTN />
                <Typography mt={3} variant="h4" >
                    Mis compras
                </Typography>
            </Box>

            {
                loading ? 
                <SkeletonMyPurchases />

                : 
                <>
                    {
                        carts && carts.map(carts =>(
                            <CardShopping {...carts} />
                        ))
                    }

                </>
            }

          
        </Container>

    )
}
