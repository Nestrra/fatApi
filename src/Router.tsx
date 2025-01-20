

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './modules/home/pages/HomePage'
import { useAppSelector } from './redux/hooks'
import { RouterLayout } from './components/Layout'
import { LoginPage } from './modules/auth/pages/LoginPage'
import { ProductDetailPage } from './modules/detailProduct/pages/ProductDetailPage'
import { AdminProducts } from './modules/adminProducts/pages/AdminProducts'
import { MyPurchases } from './modules/myPurchases/pages/MyPurchases'
import { NewProduct } from './modules/adminProducts/components/NewProduct'

export const RouterApp = () => {

    const { user, loading } = useAppSelector((state) => state.authReducer)
   

    if (loading) {
        return(
            <></>
        )
    }


    if (!user) {
        return (
            <Routes>
                <Route>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path={'/*'} element={<Navigate to={'/login'} />} />
                </Route>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/' element ={<RouterLayout/>} >
                    <Route path='/inicio' element={<HomePage />} />
                    <Route path='/product/:name/:id' element={<ProductDetailPage />} />  
                    <Route path='/administrar-productos' element={<AdminProducts />} /> 
                    <Route path='/Mis-compras' element={<MyPurchases />} />   
                    <Route path='/producto' element={<NewProduct/>} />  
                                      
                    <Route path={'/*'} element={<Navigate to={'/inicio'} />} />
                </Route>
            </Routes>
        )
    }


}


