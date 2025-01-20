import { NuewProductResponse, ProductsResponse } from "../interfaces/appInterfaces"
import api from "./api"


export const allProducts = async () => {
       
    return await api.get<ProductsResponse[]>(`/products` )

}
export const Allcategories = async () => {
       
    return await api.get<[]>(`/products/categories` )

}


export const singleProduct = async (id:number) => {
       
    return await api.get<ProductsResponse>(`/products/${id}` )

}

export const addNuewProduct = async (data:any) => {
    
   
    return await api.post<NuewProductResponse>(`/products/`, data)

}

export const updateProduct = async (id:number, data:any) => {
       
    return await api.put<NuewProductResponse>(`/products/${id}`, data )

}


export const deleteProductForId = async (id:number) => {
       
    return await api.delete<NuewProductResponse>(`/products/${id}`)

}
