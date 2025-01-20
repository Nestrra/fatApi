
import { modelFormLogin } from "./modelFormLogin";



const {
    
        user,
        password,

    
} = modelFormLogin;


export const initialValueLogin = {

    [user.name] :'',
    [password.name ]:'',
      
};