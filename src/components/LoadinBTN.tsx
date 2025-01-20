import { LoadingButton } from '@mui/lab'




interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    isloading:boolean;
    title: string;
    fullWidth?:boolean;
    disabled?:boolean;
    fontSize?:any;
    onClick?: ()=>void;
    variant?: "text" | "outlined" | "contained" | undefined
}


export const LoadingBTN = ({ fontSize=14, disabled=false, variant='contained', onClick, title,type, fullWidth, isloading }:Props) => {


    return (
        <LoadingButton 
            
            disableElevation
            style={{ fontSize:fontSize, textTransform:'none', marginTop:12 }}
            disabled={disabled}
            onClick={onClick}
            type={type}
            loading={isloading} 
            variant={variant}
            fullWidth={fullWidth}
        >
        
            {title}
        </LoadingButton>
    )
}