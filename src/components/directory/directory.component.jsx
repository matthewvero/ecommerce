// Utilities
import React                        from 'react';
import { useSelector }              from 'react-redux';
import { getDirectorySections }     from '../../redux/directory/directory.reducer';

// Components
import { DirectoryContainer }       from './directory.styles'
import  MenuItem                    from '../menu-item/menu-item.component'


const Directory = () => { 
  const sections = useSelector(getDirectorySections);
  return (
    <DirectoryContainer>
      { sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} ></MenuItem>) }
    </DirectoryContainer>
  )
}
    // maps the data in the state to menuItem components, these are then displayed on screen. 

export default Directory;