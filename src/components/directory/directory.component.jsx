import React from 'react';


import {MenuItem} from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { connect } from 'react-redux';
import { getDirectorySections } from '../../redux/directory/directory.reducer';
import { createStructuredSelector } from 'reselect';


const Directory = ({sections}) => (

    <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps}) => {
        return <MenuItem key={id} {...otherSectionProps} ></MenuItem>
      })}
    </div>
)
    // maps the data in the state to menuItem components, these are then displayed on screen. 

const mapState = createStructuredSelector({
  sections: getDirectorySections
})

export default connect(mapState)(Directory)