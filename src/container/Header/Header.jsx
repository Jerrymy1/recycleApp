import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Earn from Your Trash'/>
      <h1 className='app__header-h1'> Recycle and Earn, Covinently!</h1>
      <p className='p__opensans' style={{margin : '2rem 0', color : 'var(--color-black)'}}>Save money on waste disposal, earn rewards, and get recognize for recycling</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.mobile_app} alt='header img'/>
    </div>
  </div>
);

export default Header;
