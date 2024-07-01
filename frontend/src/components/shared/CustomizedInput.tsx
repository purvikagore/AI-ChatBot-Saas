import TextField from "@mui/material/TextField"
import React from "react"

type Props = {
    name: string
    type: string
    label: string


}


const CustomizedInput = (props:Props) => {
    return <TextField name={props.name} label={props.label} type = {props.type} />
};

export default CustomizedInput;