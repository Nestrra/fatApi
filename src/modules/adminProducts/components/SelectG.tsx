


import { FormControl, FormHelperText, InputLabel,  Select, } from '@mui/material'
import { useField } from 'formik';
import  { useEffect } from 'react'


interface SelectProps {

    children: JSX.Element[];
    value?:any;
    setValues?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    label: string;
    name: string;
    
}


export const SelectG = ({ value, setValues, children, label,  ...props }: SelectProps) => {

    const [filed, meta] = useField(props)

    useEffect(() => {
  
        estable()
      }, [value])

      const estable = ()=>{

        if (value !== undefined) {
         return setValues!(filed.name, value)
        }
    
      }
 

    return (
        <div>
            <FormControl fullWidth size='small' error={meta.touched && meta.error ? true : false}  >

                <InputLabel> {label} </InputLabel>
                <Select
                    
                    {...filed}
                    {...props}
                    label={label}

                >
                    {
                        children
                    }

                </Select>
                <FormHelperText>{meta.touched && meta.error ? meta.error : ''} </FormHelperText>
              
            </FormControl>

        </div>
    )
}
