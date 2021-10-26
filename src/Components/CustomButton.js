import React from 'react'
import { Button } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const ButtonStyled= withStyles({

    root:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#3c5f99",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #387ea6",
        transition: "backgroud .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#165070"
        },


    },
    label: {
        textTransform: 'capitalize',
    }

})(Button);

function CustomButton(props) {
    const{txt}=props;
    return (
        <ButtonStyled variant="contained" > {txt}</ButtonStyled>
    )
}

export default CustomButton

