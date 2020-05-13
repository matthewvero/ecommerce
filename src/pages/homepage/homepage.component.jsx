// Utilites
import React from 'react'

// Components
import {CSSTransitionGroup} from 'react-transition-group'
import Directory from '../../components/directory/directory.component'
import { HomepageContainer } from './homepage.styles'

const HomePage = () => (

    <CSSTransitionGroup
                transitionName="homepage"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={100}
    >
        <HomepageContainer>
            <Directory/>
        </HomepageContainer>
    </CSSTransitionGroup>
    
)

export default HomePage
