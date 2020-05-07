import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import  CollectionPage  from '../../components/collection/collection.component';
import {CSSTransitionGroup} from 'react-transition-group'
import './shop.styles.scss'
const ShopPage = ({match}) => (
    <CSSTransitionGroup
                transitionName="shop"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnter={false}
                transitionLeave={false}
            >
            <div className='shopPage'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>
            </div>
    </CSSTransitionGroup>
)

export default ShopPage;