import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({
 
  palette: {
  
    primary: {
      main: '#802b6e',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components:{
    MuiButton:{
        
        defaultProps:{
            
            style:{
                textTransform:'lowercase',
                fontSize:14,
            }
        }
    }
 }   
});

export default theme;