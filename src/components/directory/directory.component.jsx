// Utilities
import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDirectorySections }     from '../../redux/directory/directory.reducer';

// Components
import { DirectoryContainer }       from './directory.styles'
import { MenuItem }                   from '../menu-item/menu-item.component'


const Directory = ({sections}) => (

    <DirectoryContainer>
      {sections.map(({id, ...otherSectionProps}) => {
        return <MenuItem key={id} {...otherSectionProps} ></MenuItem>
      })}
    </DirectoryContainer>
)
    // maps the data in the state to menuItem components, these are then displayed on screen. 

const mapState = createStructuredSelector({
  sections: getDirectorySections
})

export default connect(mapState)(Directory)