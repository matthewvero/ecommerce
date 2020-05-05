import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import  CollectionPage  from '../../components/collection/collection.component';

const ShopPage = ({match}) => (
    <div className='shopPage'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>
    </div>
)

export default ShopPage;