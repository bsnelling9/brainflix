import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import SearchIcon from '../../assets/Icons/search.svg';
import ProfilePic from '../../assets/Images/Mohan-muruge.jpg';
import UploadIcon from '../../assets/Icons/upload.svg';

import './Navbar.scss';

const navbarComponent = () => {
    return(
        <header className="nav-bar">
            <div className='nav-bar__container'>
                <Link to='/'>
                    <img 
                        className="nav-bar--img"
                        src={Logo}
                    />
                </Link>
                <div className='nav-bar__search'>
                    <div className='nav-bar__search--container'>
                        <img className="nav-bar__search--img" src={SearchIcon}/> 
                        <input className='nav-bar__search--input'
                            type='text'
                            placeholder='Search'
                        />
                    </div>
                    <Link className='nav-bar__btn btn__notmobile' to='/upload'>
                        <img className='btn__ico' src={UploadIcon} alt='upload icon'/>
                        <span className='btn__text'>upload</span>
                    </Link>
                    <div className='nav-bar__search--display'>
                        <img className='profile-img' src={ProfilePic} alt='profile-picture'/>
                    </div>
                </div>
                <Link className='nav-bar__btn btn__mobile' to='/upload'>
                    <img className='btn__ico' src={UploadIcon} alt='upload icon'/>
                    <span className='btn__text'>upload</span>
                </Link>
            </div>
        </header> 
    )
}
export default navbarComponent;