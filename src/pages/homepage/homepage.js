import React from 'react';

import './homePage.scss';
import DirectoryMenu from '../../components/directoryMenu/directoryMenu';


const HomePage = () => (
    <div className='homepage'>
        <DirectoryMenu></DirectoryMenu>
    </div>
);

export default HomePage;