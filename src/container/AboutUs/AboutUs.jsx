import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { SubHeading } from '../../components';

const AboutUs = () => (
  <div className='app__aboutus flex__center section__padding' id='about'>
     <div className='app__aboutus-overlay flex__center'>
        {/* <img src={ images.G} alt='g letter' /> */}
        <SubHeading title='Get started with just a few simple steps' />
     </div>
       <div className='app__aboutus-content flex__center'>

         <div className='app__aboutus-content_signup'>
           <img src={ images.sign_up} alt='about_spoon' className='sign_up' />
           <h1 className='headtext__cormorant'>sign up</h1>
           <p className='p__opensans'>kjsjsjsjsjsjsjsjsjsjs. jlkeueyeh Awewteyeud. gghdhhdhdhdh, gdgdgdgdg. gdgdgdgdgdg</p>
           <button type='button' className='custom__button'>Know More</button>
         </div>

         <div className='app__aboutus-content_schedule'>
           <img src={ images.schedule} alt='about_spoon' className='schedule' />
           <h1 className='headtext__cormorant'>schedule</h1>
           <p className='p__opensans'>kjsjsjsjsjsjsjsjsjsjs. jlkeueyeh Awewteyeud. gghdhhdhdhdh, gdgdgdgdg. gdgdgdgdgdg</p>
           <button type='button' className='custom__button'>Know More</button>
         </div>

         {/* <div className='app__aboutus-content_knife flex__center'>
           <img src={ images.knife} alt='about_knife' />
         </div> */}

         <div className='app__aboutus-content_sort'>
           <img src={ images.sort} alt='about_spoon' className='sort' />
           <h1 className='headtext__cormorant'>sort</h1>
           <p className='p__opensans'>dhgdhdhddhdj.jsjsjsjsjsjsjsjsjsjs. jlkeueyehAwewteyeu,dgghdhhdhdhdh. gdgdgdgdggdgdgdgdgdg</p>
           <button type='button' className='custom__button'>Know More</button>
         </div>
          <div className='app__aboutus-content_earn'>
             <img src={ images.earn} alt='about_spoon' className='spoon__img' />
             <h1 className='headtext__cormorant'>Earn</h1>
             <p className='p__opensans'>dhgdhdhddhdj.jsjsjsjsjsjsjsjsjsjs. jlkeueyehAwewteyeu,dgghdhhdhdhdh.   gdgdgdgdggdgdgdgdgdg</p>
             <button type='button' className='custom__button'>Know More</button>
          </div>
       </div>
     
  </div>
);

export default AboutUs;
