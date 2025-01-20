import { Avatar, Box, Container, Divider, Grid, IconButton, Modal, Pagination, Typography } from "@mui/material"
import { IconBTN, LoadingBTN } from "../../../components"
import { useAppSelector } from "../../../redux/hooks"
import { ProductsResponse } from "../../../interfaces/appInterfaces"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from "react-router-dom";
import { FormatPath } from "../../../utils/path";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ChangeEvent, useState } from "react";
import { useCrudProduct } from "../hooks/useCrudProduct";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    p: 2,
    
};
export const AdminProducts = () => {
    const navigate = useNavigate()
    const { loading, deleteProduct }=useCrudProduct()
    const { products } = useAppSelector((state) => state.productsReducer)
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState<number | null>(null);
    const productsPerPage = 8;
    const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
        console.log(event)
        setPage(value);
    };
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : null;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleDeleteProduct = () => {
        
        deleteProduct(id!, handleClose)
        
        
    }

    return (

        <Container  >

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography fontWeight={'bold'} id="modal-modal-title" variant="h6" component="h2">
                        Eliminación de producto
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`Esta seguro de eliminar el producto `}
                    </Typography>

                    <Box display={'flex'} justifyContent={'space-between'} mt={2} >
                       
                        <LoadingBTN onClick={handleClose} variant='outlined' isloading={false} title="Cancelar" />
                        <LoadingBTN onClick={handleDeleteProduct} isloading={loading} title="Confirmar" />
                    </Box>



                </Box>


            </Modal>

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
                mt={2}
                borderRadius={8}
                bgcolor={'white'}
                p={2}
            >

                <Box

                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography fontSize={17} >
                        Productos
                    </Typography>
                    <LoadingBTN onClick={() => navigate(`/producto`)} isloading={false} title={"Nuevo producto"} />
                </Box>
                <Divider sx={{ mt: 3, mb: 2 }} />

                {
                    currentProducts && currentProducts.map((item: ProductsResponse) => (
                        <Box
                            key={item.id}
                        >
                            <Grid

                                container
                            >
                                <Grid
                                    md={0.5}
                                    p={1}
                                    display={'flex'}
                                    alignItems={'center'}
                                    item
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={item.image}
                                        sx={{ width: 40, height: 40 }}
                                    />

                                </Grid>
                                <Grid
                                    md={6}
                                    p={1}
                                    display={'flex'}
                                    alignItems={'center'}
                                    item
                                >
                                    {item.title}
                                </Grid>
                                <Grid
                                    md={2}
                                    p={1}
                                    display={'flex'}
                                    alignItems={'center'}
                                    item
                                >
                                    {item.category}
                                </Grid>
                                <Grid
                                    md={1}
                                    p={1}
                                    display={'flex'}
                                    alignItems={'center'}
                                    item
                                >
                                    <Typography textAlign={'center'} >
                                        ${item.price}
                                    </Typography>

                                </Grid>
                                <Grid

                                    md={2}
                                    p={1}
                                    display={'flex'}
                                    flexDirection={'row'}
                                    justifyContent={'space-around'}
                                    alignItems={'center'}
                                    item
                                >
                                    <IconButton onClick={() => navigate(`/product/${FormatPath(item.title)}/${item.id}`)} type="button" sx={{ p: '10px' }} aria-label="search">
                                        <VisibilityOutlinedIcon />
                                    </IconButton>
                                    <IconButton onClick={() => navigate(`/producto`, { state: { item, edit: true } })} type="button" sx={{ p: '10px' }} aria-label="search">
                                        <ModeEditOutlineOutlinedIcon />
                                    </IconButton>
                                    <IconButton onClick={ () => {handleOpen(), setId(item.id) }} type="button" sx={{ p: '10px' }} aria-label="search">
                                        <DeleteOutlinedIcon />
                                    </IconButton>
                                </Grid>

                            </Grid>
                            <Divider />
                        </Box>

                    ))
                }
                <Box mt={2} display="flex" justifyContent="center">
                    <Pagination
                        count={Math.ceil(products ? products.length / productsPerPage : 0)} // Número total de páginas
                        page={page} // Página actual
                        onChange={handleChangePage} // Manejador para el cambio de página
                        color="primary" // Color de la paginación
                    />
                </Box>
            </Box>

        </Container>

    )
}
