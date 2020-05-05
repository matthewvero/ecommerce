import React from 'react'
import { connect } from 'react-redux'
import { getCollection } from '../../redux/shop/shop.reducer'
import './collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

export const CollectionPage = ({collection}) => {
      console.log('collection', collection)
      return (
            <div className='collectionpage'>
                  <h1>{collection.title}</h1>
                  <div className='collection'>
                        {collection.items.map(item => <CollectionItem key={item.id} {...item}/>)}
                  </div>
            </div>
            )
      }

      const mapStateToprops = (state, ownProps) => ({
            collection: getCollection(ownProps.match.params.collectionID)(state)
      })
        
      
export default connect(mapStateToprops)(CollectionPage)