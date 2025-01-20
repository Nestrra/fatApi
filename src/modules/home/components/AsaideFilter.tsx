import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 interface Props {
    categories: [] | null;
    setSelectedCategory:any;
    setSortOrder:any;
    setSortByRating:any
 }   

export const AsaideFilter = ({categories, setSelectedCategory, setSortOrder, setSortByRating}:Props) => {


    const handleClearFilt = ()=>{
         setSelectedCategory('')
        setSortOrder('asc')
        setSortByRating('asc')
    }


    return (
        <Box

            sx={{mt:4, display: { xs: 'none', sm:'none', md: 'block' } }}
        

        >

            <Button onClick={handleClearFilt} sx={{mb:1, fontSize:11}} fullWidth variant='contained' >Limpiar filtros</Button>

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
                    <AccordionDetails sx={{ display:'flex', flexDirection:'column' }} >
                            {categories && categories.map((categorie, index)=>(
                                <Button onClick={()=>setSelectedCategory(categorie)} key={index} >{categorie} </Button>
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
                    <AccordionDetails sx={{ display:'flex', flexDirection:'column' }} >
                    <Button onClick={()=>setSortOrder('asc')} > Menor precio </Button>
                    <Button onClick={()=>setSortOrder('desc')} > Mayor menor precio </Button>
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
                    <AccordionDetails sx={{ display:'flex', flexDirection:'column' }} >
                    <Button onClick={()=>setSortByRating('desc')} > Mejor calificación </Button>
                    <Button onClick={()=>setSortByRating('asc')} > Menor calificación </Button>
                    </AccordionDetails>
                </Accordion>

            </Box>

        </Box>
    )
}
