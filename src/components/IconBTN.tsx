
import { Box, IconButton } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const IconBTN = () => {
    
    const navigate = useNavigate()

  return (
    <Box mt={3} >
    <IconButton onClick={() => navigate(-1)} color="primary" aria-label="add to shopping cart">
      <ArrowBackIcon sx={{ fontSize: 40 }} />
    </IconButton>
  </Box>
  )
}
