

import { Box, Card, Skeleton } from '@mui/material'


export const SkeletonMyPurchases = () => {
    return (

        <Box>
            {(Array.from(new Array(3))).map((index) => (

                <Card
                    key={index}
                    sx={{ p: 2, mb:1 }}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Skeleton animation='wave' variant='rectangular' width={120} height={120} />
                        <Box width={'70%'} >
                            <Skeleton sx={{ mb: 1 }} animation='wave' variant='rectangular' width={'100%'} height={8} />
                            <Skeleton sx={{ mb: 1 }} animation='wave' variant='rectangular' width={'100%'} height={8} />
                            <Skeleton animation='wave' variant='rectangular' width={'100%'} height={8} />
                        </Box>

                        <Skeleton animation='wave' variant='rectangular' width={60} height={60} />
                    </Box>

                </Card>

            ))}
        </Box>





    )
}
