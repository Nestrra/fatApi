import { useEffect, useState } from "react"
import { getCcarts } from "../../../services/carts"
import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { carts } from "../../../redux/slices/myPurchasesSlice"
import { filterProducts } from "../utils/filterProducts"



export const useShopping = () => {
    const { products } = useAppSelector((state) => state.productsReducer)
     const { user } = useAppSelector((state) => state.authReducer)
    const dispatch = useAppDispatch()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        getAllcarts()
    }, [])



    const getAllcarts = async () => {
        setloading(true)

        const cartsUser = JSON.parse(localStorage.getItem('carts')!)

       if (!cartsUser) {
            try {
                const response = await getCcarts(user!.id.toString())
                if (response.status === 200) {

                    const  cartsList = filterProducts(products!, response.data)
                    console.log(cartsList)
                    dispatch(carts(cartsList))
                    localStorage.setItem('carts', JSON.stringify(cartsList));
                    setloading(false)
                }

            } catch (error) {
                toast.error('g')
                setloading(false)
            }
        } else {
          dispatch(carts(cartsUser))
            
            setloading(false)

        }
    }

    return {
      loading


    }
}
