import React from 'react'
import {Preview} from '../../components/preview-components/preview-index';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.reducer';

const CollectionOverview = ({collections}) => (
    collections.map(({id, title, items}) => (
        <Preview key={id} title={title} items={items}></Preview>
    ))        
)
      
      
  const mapState = createStructuredSelector({
      collections: selectCollectionsForPreview
  })

export default connect(mapState)(CollectionOverview)