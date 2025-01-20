import { CartResponse } from "../interfaces/appInterfaces"
import api from "./api"


export const getCcarts = async (user_id:string) => {
       
    return await api.get<CartResponse[]>(`/carts/user/${user_id}` )

}