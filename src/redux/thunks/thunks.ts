import { toast } from "react-toastify"
import { getAllUser } from "../../services/auth"
import { allUsers } from "../slices/authSlice"

export const getUsers = ( ) => {

    return async (dispatch: any) => {

        try {
            const resp = await getAllUser()
            dispatch(allUsers(resp.data))
            
        } catch (error) {
            toast.error("Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.")
        }
        
      

    }

}