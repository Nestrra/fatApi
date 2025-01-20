import { Grid, Paper, Box, Typography, Link } from "@mui/material"
import { Formik, Form } from "formik"
import { useEffect } from "react"
import { modelFormLogin, initialValueLogin , validationLogin} from "../modelForm"
import { useAppDispatch } from "../../../redux/hooks"
import { useLogin } from "../hooks/useLogin"
import { getUsers } from "../../../redux/thunks/thunks"
import { InputG, LoadingBTN } from "../../../components"




export const LoginPage = () => {

    const { user, password } = modelFormLogin
    const { handleSubmitLogin, loading } = useLogin()
    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(getUsers())

    }, [])
    

    const handleSubmit = (values: any) => {
     
        handleSubmitLogin(values.user, values.password)

    }


    return (
        <Grid container component='main' sx={{ height: '100vh' }} >
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${'https://fakestoreapi.com/icons/intro.svg'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </Grid>
            <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} item xs={12} sm={8} md={5} component={Paper} square>
                <Box
                   sx={{
                        padding: 1,
                        my: 20,
                        mx: 4,
                    }}
                >
                    <Typography style={{ fontWeight: 'revert' }} component="h1" variant="h4">
                        Inicio de sesión
                    </Typography>
                    <Grid mt={1} item>

                        <Link href="cliente" variant="body2">
                            {"No tienes cuenta? Regístrate"}
                        </Link>
                    </Grid>
                    <Box sx={{ mt: 1, }}  >

                        <Formik
                            initialValues={initialValueLogin}
                            validationSchema={validationLogin.validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {
                                () => (

                                    <Form>
                                        <InputG
                                            size='small'
                                            marg='normal'
                                            name={user.name}
                                            label={user.label}
                                        />
                                        <InputG
                                            type='password'
                                            size='small'
                                            marg='normal'
                                            name={password.name}
                                            label={password.label}
                                        />
                                        <LoadingBTN
                                            fontSize={16}
                                            type='submit'
                                            isloading={loading}
                                            title='Iniciar sesión'
                                            fullWidth={true}
                                        />
                                    </Form>
                                )
                            }
                        </Formik>
                        <Grid container>
                            <Grid mt={2} item xs>
                                <Link onClick={() => console.log()} href="#" variant="body2">
                                    Olvidaste la contraseña?
                                </Link>
                            </Grid>

                        </Grid>                       
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
