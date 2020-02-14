import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directoryMenu.scss';
import MenuItem from '../menuItem/menuItem';
import { selectDirectorySections } from '../../redux/directory/directorSelectors';

const DirectoryMenu = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(x=>(<MenuItem key={x.id} {...x}/>))}  
    </div>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
  

export default connect(mapStateToProps)(DirectoryMenu);