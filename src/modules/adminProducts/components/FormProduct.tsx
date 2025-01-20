

import { Form, Formik } from 'formik'
import { modelFormProduct, validationProduct } from '../formModel'
import { InputG, LoadingBTN } from '../../../components'
import { Grid, MenuItem } from '@mui/material'
import { initialValueProduct } from '../formModel/initialValuesForm'
import { ProductsResponse } from '../../../interfaces/appInterfaces'
import { TextArea } from './TextArea'
import { useCrudProduct } from '../hooks/useCrudProduct'
import { SelectG } from './SelectG'
import { useAppSelector } from '../../../redux/hooks'



interface Props {
    product: ProductsResponse;
    edit:boolean
}


export const FormProduct = ({ product, edit }: Props) => {
   const { categories} = useAppSelector((state) => state.productsReducer)
    const { title, category, price, description, image, rate, count } = modelFormProduct
    const { loading, newProduct, upDProduct } = useCrudProduct()
 

    const handleSubmit = (values: any ) => {

         edit ? upDProduct( values, product.id ) :  newProduct(values)

            
    }


    return (
        <Formik
            initialValues={initialValueProduct}
            validationSchema={validationProduct.validationSchema}
            onSubmit={handleSubmit}
        >
            {
                (props) => (
                  
                    <Form>

                        <Grid
                            container
                            spacing={1}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <InputG
                                    setValues={props.setFieldValue}
                                    value={product ? product.title : ''}
                                    marg='normal'
                                    type='text'
                                    size='small'
                                    name={title.name}
                                    label={title.label}
                                />
                            </Grid>
                            <Grid
                                mt={2}
                                item
                                md={6}
                                xs={12}
                            >
                                <SelectG
                                    setValues={props.setFieldValue}
                                    value={product ? product.category : ''}
                                     name={category.name}
                                     label={category.label}


                                >
                                
                                    {categories!.map((categorie) => {
                                        return <MenuItem
                                            key={categorie}
                                            value={categorie}>{categorie}
                                        </MenuItem>

                                    })}
                                </SelectG>

                               
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <InputG
                                    setValues={props.setFieldValue}
                                    value={product ? product.price : ''}
                                    marg='normal'
                                    type='number'
                                    size='small'
                                    name={price.name}
                                    label={price.label}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <InputG
                                    setValues={props.setFieldValue}
                                    value={product ? product.image : ''}
                                    marg='normal'
                                    type='text'
                                    size='small'
                                    name={image.name}
                                    label={image.label}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <InputG
                                setValues={props.setFieldValue}
                                value={product ? product.rating.rate : ''}
                                    disabled
                                    marg='normal'
                                    type='number'
                                    size='small'
                                    name={rate.name}
                                    label={rate.label}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <InputG
                                 setValues={props.setFieldValue}
                                 value={product ? product.rating.count : ''}
                                    disabled
                                    marg='normal'
                                    type='text'
                                    size='small'
                                    name={count.name}
                                    label={count.label}
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextArea
                                    setValues={props.setFieldValue}
                                    value={product ? product.description : ''}
                                    marg='normal'
                                    type='text'
                                    size='medium'
                                    name={description.name}
                                    label={description.label} 
                                    placeholder={'Descripción'}                                />
                            </Grid>
                         
                        </Grid>


                        <LoadingBTN
                            fontSize={16}
                            type='submit'
                            isloading={loading}
                            title={ !edit ? 'Registrar producto' : 'Actualizar producto' }
                            fullWidth={true}
                        />
                    </Form>
                )
            }
        </Formik>
    )
}
