import * as Yup from 'yup';
import { modelFormProduct } from './modelFormProduct';




const {
    title,
    category,
    price,
    description,
      image

} = modelFormProduct;


export const validationProduct = {

    validationSchema: Yup.object({
        [title.name]: Yup.string()
            .required(`${title.requiredErrorMsg}`),
        [category.name]: Yup.string()
            .required(`${category.requiredErrorMsg}`),
        [price.name]: Yup.string()
            .required(`${price.requiredErrorMsg}`),

        [description.name]: Yup.string()
            .required(`${description.requiredErrorMsg}`),
        [image.name]: Yup.string()
            .required(`${image.requiredErrorMsg}`),
    })
}
