import React from 'react'
import CustomButton from './CustomButton'
import logo from '../logo.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core';
import { Style } from '@material-ui/icons';
import '../App.css'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#e6ecf5",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
  
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
    
})




function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
               
               <Typography variant="h6" className={classes.menuItem} >   
                  <div className='links'>
                  <a href="https://www.facebook.com/"  >Home</a>
                    </div>  
                </Typography>
                <Typography variant="h6" className={classes.menuItem} >
                    <div className='links'>
                         <a href>In Progress</a> 
                    </div>   
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <div className='links'>
                         <a >My Tasks</a> 
                    </div>  
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   <div className='links'>
                         <a >Completed</a> 
                    </div>  
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <div className='links'>
                         <a >About</a> 
                    </div>  
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <div className='links'>
                         <a >How-To</a> 
                    </div>  
                </Typography>
                <CustomButton txt="Log In"/>



              
            </Toolbar>
    )
}



export default NavBar
