
import {  Modal } from '@mui/material';
import { useProductDetail } from '../hooks/useProductDetail';
import { CardProduct } from '../../home/components';


interface Props{
  id:number
  open:boolean;
  setOpen:any  
}

export const ModalProduct = ({id, open, setOpen}:Props) => {

  const {  product } = useProductDetail(id)
  const handleClose = () => setOpen(false);





  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {
          product && <CardProduct {...product} />
        }
      </>

    </Modal>

  )
}
