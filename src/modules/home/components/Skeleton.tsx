import { Grid, Skeleton, Box } from "@mui/material";



export const SkeletonG = ()=> {
  return (
   
    <Grid container  spacing={2} >
    {( Array.from(new Array(20)) ).map((index) => (

      <Grid
          key={index}
          item 
          md={3}
          sm={4}
          xs={12}

      >
       
          <Skeleton variant="rectangular" width={'100%'} height={230} />  
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
      
      </Grid>
     
    ))}
  </Grid>
         
  );
}