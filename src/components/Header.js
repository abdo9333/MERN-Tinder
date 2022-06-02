/* snippet rfce */

import React from 'react';
import '../style/header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function header() {
  return (
    <div className='header'>

        <IconButton>
        <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        
        <img className='header__logo'
             src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png" 
             alt="Tinder icon 3" />
        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default header