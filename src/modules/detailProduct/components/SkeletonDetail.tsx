
import { Box, Grid, Skeleton } from '@mui/material'

export const SkeletonDetail = () => {
  return (

    <Grid
        container
        spacing={1}
    >
        <Grid
            
            item 
            md={8}
            sm={8}
            xs={12}

        >           
            <Skeleton variant="rectangular" width={'100%'} height={400} />
         
     
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="40%" />
            </Box>
         
        </Grid>
        <Grid
            
            item 
            md={4}
            sm={4}
            xs={12}

        >           
            <Skeleton variant="rectangular" width={'100%'} height={400} />
         
              
         
        </Grid>
    </Grid>

      
  )
}
