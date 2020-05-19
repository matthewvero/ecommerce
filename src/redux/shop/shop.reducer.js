import { createSelector } from "reselect"
import { shopTypes } from './shop.types'

const initialState = null

export const ShopReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        case shopTypes.updateCollections:
          return {
            state,
            collections: payload
          }
        default:
              return state
      }
};

export const shopSelector = state => state.shop

export const getAllCollections = createSelector(
      [shopSelector],
      shop => shop ? shop.collections : null
);

export const selectCollectionsForPreview = createSelector(
  [getAllCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const getCollection = collectionUrlParam => createSelector(
      [getAllCollections],
      collection =>  collection ? collection[collectionUrlParam] : null
);


