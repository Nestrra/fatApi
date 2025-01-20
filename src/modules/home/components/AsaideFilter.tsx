import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 interface Props {
    categories: [] | null 
 }   

export const AsaideFilter = ({categories}:Props) => {


    return (
        <Box

            sx={{mt:4, display: { xs: 'none', sm:'none', md: 'block' } }}
        

        >

            <Box
                px={2}
                py={1}
                borderRadius={3}
                bgcolor={'#f3f3f3'}
            >
                <Typography variant='h6' mt={1} >Filtrar por:</Typography>

                <Accordion
                    
                    elevation={0}
                    sx={{ marginTop:2, mb:1,  bgcolor:'#f3f3f3'}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" fontWeight={'bold'} >Categoria</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            {categories && categories.map((categorie, index)=>(
                                <Typography key={index} >{categorie} </Typography>
                            ))}
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    
                    elevation={0}
                    sx={{  mb:1,  bgcolor:'#f3f3f3'}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" fontWeight={'bold'} >Precio</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                </Accordion>
                <Accordion
                    
                    elevation={0}
                    sx={{ marginTop:2, mb:1,  bgcolor:'#f3f3f3'}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" fontWeight={'bold'} >Calificaión</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                </Accordion>

            </Box>

        </Box>
    )
}
