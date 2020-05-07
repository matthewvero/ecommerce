import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'
import {CSSTransitionGroup} from 'react-transition-group'
const HomePage = () => (

    <CSSTransitionGroup
                transitionName="homepage"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={100}
    >
        <div className='homepage'>
            <Directory/>
        </div>
    </CSSTransitionGroup>
    
)

export default HomePage
