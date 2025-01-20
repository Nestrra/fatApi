

import { FormControl, FormLabel, TextareaAutosize } from '@mui/material'
import { useField } from 'formik';
import  { useEffect } from 'react'


interface TextAprops{
    value?:any,
    setValues?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    name:string;
    placeholder: string;
    label: string;
    [x:string]:any
   
}



export const TextArea = ({ setValues, value, label, placeholder, ...props   }:TextAprops) => {

    const [ filed  ]= useField(props)  
    useEffect(() => {
  
        estable()
      }, [value])

      const estable = ()=>{

        if (value !== undefined) {
         return setValues!(filed.name, value)
        }
      
      
      }

    return (

      

         
                
                    <FormControl sx={{ width: '100%' }} >
                        <FormLabel sx={{ mb: 1 }} >{label} </FormLabel>
                        <TextareaAutosize 
                             placeholder={placeholder} 
                             minRows={5} 
                             {...props}
                             {...filed}
                             />

                    </FormControl>
                
            

        

    )
}
