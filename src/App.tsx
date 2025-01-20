

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos
import { RouterApp } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={1500} />
        <RouterApp />
      </BrowserRouter>

    </>
  )
}

export default App
