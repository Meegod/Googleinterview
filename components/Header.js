import React from 'react'
import './header.css';
import { ReactComponent as BrandIcon } from "./google.svg";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';



function Header() {
    return (
        <div class="header">
        <div class="header__left">
          {/* <a href="#">About</a>
          <a href="#">Store</a> */}
        </div>
        <div class="header__right">
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <span class="material-icons header__apps"> 
          <BrandIcon/>
           </span>
          <span class="material-icons">
          <Button variant="contained"
          style={{backgroundColor: '#4285F4', color: '#FFFFFF',padding:'6px',
        fontSize:'10px',borderRadius:'0px'}}
           color="primary" href="#contained-buttons">
       Sign In
      </Button>          </span>
        </div>
      </div>
    )
}

export default Header
