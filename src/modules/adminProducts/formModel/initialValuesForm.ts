
import { modelFormProduct } from "./modelFormProduct";


const {
    title,
    category,
    price,
    description,
    count,
    rate,
    image

} = modelFormProduct;



export const initialValueProduct = {

    [title.name] :'',
    [category.name ]:'',
    [price.name ]:'',
    [description.name ]:'',
    [count.name ]:0,
    [rate.name ]:0,
    [image.name ]:'',
      
};