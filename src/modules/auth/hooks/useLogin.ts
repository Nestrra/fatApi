

import { useEffect, useState } from 'react'
import { login, logout, start } from '../../../redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { toast } from 'react-toastify'

export const useLogin = () => {
  const { allUser } = useAppSelector((state) => state.authReducer)
  const [loading, setloading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {

    checkStorage()
  }, [])


  const handleSubmitLogin = async (username: string, password: string) => {

    dispatch(start())

    if (allUser) {
      const user = allUser.find(u => u.username === username);

      if (!user) {
        setloading(false)
        return toast.error("usuario no registrado")

      }
      if (user && user.password === password) {

        dispatch(login(user))
        localStorage.setItem('user', JSON.stringify(user));
        setloading(false)
      } else {
        toast.error("Contraseña incorrecta ")
        setloading(false)
      }
    } else {
      toast.error("Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.")
      setloading(false)
    }


    setError(null)


  }



  const checkStorage = () => {

      dispatch(start())

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user) {
          dispatch(login(user));
        }
      } catch (e) {
        console.error("Error al leer el usuario de localStorage:", e);
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  };




  return {
    loading,
    error,
    handleSubmitLogin,
    checkStorage


  }
}
