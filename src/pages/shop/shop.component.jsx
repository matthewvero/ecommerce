// Utilities
import React from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux';


// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import  CollectionPage  from '../../components/collection/collection.component';
import {CSSTransitionGroup} from 'react-transition-group'
import { ShopPageContainer } from './shop.styles'
import { WithSpinner } from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            this.props.updateCollection(convertCollectionsSnapshotToMap(snapshot))
            this.setState({loading: false})
        })

    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <CSSTransitionGroup
                        transitionName="shop"
                        transitionAppear={true}
                        transitionAppearTimeout={200}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                    <ShopPageContainer>
                        <Route exact path={`${match.path}`} 
                            render={(props) => 
                                <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
                            }
                        />
                        <Route path={`${match.path}/:collectionID`} 
                            render={(props) => 
                                <CollectionPageWithSpinner isLoading={loading} {...props}/>
                            }
                        />
                    </ShopPageContainer>
            </CSSTransitionGroup>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collections => dispatch(updateCollections(collections))
})


export default connect(null, mapDispatchToProps)(ShopPage);