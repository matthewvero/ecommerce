// Utilities
import React                  from 'react'
import { connect }            from 'react-redux'
import { getCollection }      from '../../redux/shop/shop.reducer'

// Components
import { 
      CollectionContainer, 
      CollectionMap 
}                             from './collection.styles'
import CollectionItem         from '../collection-item/collection-item.component'

export const CollectionPage = ({collection}) => {
      console.log('collection', collection)
      return (
            <CollectionContainer>
                  <h1>{collection.title}</h1>
                  <CollectionMap>
                        {collection.items.map(item => <CollectionItem key={item.id} {...item}/>)}
                  </CollectionMap>
            </CollectionContainer>
            )
      }

      const mapStateToprops = (state, ownProps) => ({
            collection: getCollection(ownProps.match.params.collectionID)(state)
      })
        
      
export default connect(mapStateToprops)(CollectionPage)