
import { InputLabelProps, InputProps, TextField } from '@mui/material'
import { useField } from 'formik';
import { HTMLInputTypeAttribute, useEffect } from 'react';



interface Props {

      label?:string;
      type?:HTMLInputTypeAttribute | undefined; 
      select?:boolean;
      name:string; 
      children?: JSX.Element[];
      onChange?: any;
      disabled?:boolean;
      inputPropsI?:InputProps;
      value?:any;
      setValues?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
      inputLabelProps?:InputLabelProps;
      marg?: "dense" | "none" | "normal" | undefined
      size?: "small" | "medium" | undefined
      [x:string]:any

}
 

export const InputG = ( { value, setValues, inputLabelProps, inputPropsI, label, onChange, disabled,  ...props }:Props ) => {
  

    const [ filed, meta  ]= useField(props)  

    useEffect(() => {
  
        estable()
      }, [value])

      const estable = ()=>{

        if (value !== undefined) {
         return setValues!(filed.name, value)
        }
      
      
      }
    
    return (
    
            <TextField
                
                InputLabelProps={inputLabelProps}
                margin={props.marg}
                type={props.type}
                error={ meta.touched && meta.error ? true : false }
                fullWidth
                size={props.size}
                label={label}
                helperText={meta.touched && meta.error ? meta.error : ''}
                {...props}
                {...filed}
                disabled={disabled}
                InputProps={ inputPropsI }
            >

           { props.children }

            </TextField>

  )
}
