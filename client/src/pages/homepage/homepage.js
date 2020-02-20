import React from 'react';

import { HomePageContainer } from './homepageStyles';
import DirectoryMenu from '../../components/directoryMenu/directoryMenu';

const HomePage = () => (
    <HomePageContainer>
        <DirectoryMenu></DirectoryMenu>
    </HomePageContainer>
);

export default HomePage;