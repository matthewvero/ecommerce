import React from 'react'
import {Preview} from '../../components/preview-components/preview-index';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.reducer';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    collections.map(({id, title, items}) => (
        <Preview key={id} title={title} items={items}></Preview>
    ))        
  )
}
      
      

export default CollectionOverview;