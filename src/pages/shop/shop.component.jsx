// Utilities
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import { useDispatch,  } from 'react-redux';

// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import  CollectionPage  from '../../components/collection/collection.component';
import {CSSTransitionGroup} from 'react-transition-group'
import { ShopPageContainer } from './shop.styles'
import { WithSpinner } from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=> {
        const collectionRef = firestore.collection('collections')
        const unsub = collectionRef.onSnapshot(async snapshot => {
            dispatch(updateCollections(convertCollectionsSnapshotToMap(snapshot)));
            setLoading(false);
        })
        return () => {
            unsub();
        }
    }, [dispatch])

    return (
        <CSSTransitionGroup
                transitionName="shop"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnter={false}
                transitionLeave={false}
            >
            <ShopPageContainer>
                <Route exact path={'/shop'} 
                    render={(props) => 
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
                    }
                />
                <Route path={`/shop/:collectionID`} 
                    render={(props) => 
                        <CollectionPageWithSpinner isLoading={loading} {...props}/>
                    }
                />
            </ShopPageContainer>
        </CSSTransitionGroup>
    )
};

export default ShopPage;