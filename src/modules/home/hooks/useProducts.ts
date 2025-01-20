import { useEffect, useState } from "react"
import { Allcategories, allProducts } from "../../../services/products"
import { useAppDispatch } from "../../../redux/hooks"
import { toast } from "react-toastify"
import { categoriesList, productsList } from "../../../redux/slices/productsSlice"



export const useProducts = () => {

    const dispatch = useAppDispatch()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        getAllProducts()
        getAllCategories()
    }, [])



    const getAllProducts = async () => {
        setloading(true)
        const products = JSON.parse(localStorage.getItem('products')!)

      

        if (!products) {
            try {
                const response = await allProducts()
                if (response.status === 200) {
                    dispatch(productsList(response.data))
                    localStorage.setItem('products', JSON.stringify(response.data));
                    setloading(false)
                }

            } catch (error) {
                toast.error('g')
                setloading(false)
            }
        } else {

            dispatch(productsList(products))
            setloading(false)

        }
    }

    const getAllCategories = async () => {
        setloading(true)
        const categories = JSON.parse(localStorage.getItem('categories')!)

      

        if (!categories) {
            try {
                const response = await Allcategories()
                if (response.status === 200) {
                    dispatch(categoriesList(response.data))
                    localStorage.setItem('categories', JSON.stringify(response.data));
                    setloading(false)
                }

            } catch (error) {
                toast.error('g')
                setloading(false)
            }
        } else {

            dispatch(categoriesList(categories))
            setloading(false)

        }
    }

    return {
    loading


    }
}
