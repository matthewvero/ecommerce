// Utilities
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import  CollectionPage  from '../../components/collection/collection.component';
import {CSSTransitionGroup} from 'react-transition-group'
import { ShopPageContainer } from './shop.styles'
const ShopPage = ({match}) => (
    <CSSTransitionGroup
                transitionName="shop"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnter={false}
                transitionLeave={false}
            >
            <ShopPageContainer>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>
            </ShopPageContainer>
    </CSSTransitionGroup>
)

export default ShopPage;