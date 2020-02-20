import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menuItem/menuItem';
import { selectDirectorySections } from '../../redux/directory/directorSelectors';

import { DirectoryMenuContainer } from './directoryMenuStyles';

const DirectoryMenu = ({sections}) => (
    <DirectoryMenuContainer>
        {sections.map(x=>(<MenuItem key={x.id} {...x}/>))}  
    </DirectoryMenuContainer>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
  

export default connect(mapStateToProps)(DirectoryMenu);