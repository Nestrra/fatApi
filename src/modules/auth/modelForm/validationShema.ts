import * as Yup from 'yup';
import { modelFormLogin } from './modelFormLogin';



const { user, password } = modelFormLogin;


export const validationLogin = {

    validationSchema: Yup.object({
        [user.name]: Yup.string()
            .required(`${user.requiredErrorMsg}`),
        [password.name]: Yup.string()
            .required(`${password.requiredErrorMsg}`),
    })
}
