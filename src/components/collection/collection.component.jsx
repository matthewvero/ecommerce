// Utilities
import React                  from 'react'
import { useSelector }        from 'react-redux'
import { getCollection }      from '../../redux/shop/shop.reducer'

// Components
import { 
      CollectionContainer, 
      CollectionMap 
}                             from './collection.styles'
import CollectionItem         from '../collection-item/collection-item.component'

export const CollectionPage = ({match}) => {
      const collection = useSelector(getCollection(match.params.collectionID))
      return (
            <CollectionContainer>
                  <h1>{collection?.title}</h1>
                  <CollectionMap>
                        {collection?.items.map(item => <CollectionItem key={item.id} {...item}/>)}
                  </CollectionMap>
            </CollectionContainer>
            )
      }

      
export default CollectionPage;