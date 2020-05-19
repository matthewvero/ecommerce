import { shopTypes } from './shop.types'

export const updateCollections = (payload) => ({
      type: shopTypes.updateCollections,
      payload: payload
})
