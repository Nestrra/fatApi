
import { User } from "../interfaces/appInterfaces"
import api from "./api"


export const getAllUser = async () => {
      
    return await api.get<User[]>(`/users`)

}


