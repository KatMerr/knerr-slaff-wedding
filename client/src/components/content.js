import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Page404 from './pages/page404'
import OurStoryPage from './pages/our-story'
import SitePage from './pages/location'
import RegistryPage from './pages/registry'
import RSVPPage from './pages/rsvp'
import BeachBackground from '../../../images/beach-background.jpg'

class Content extends Component {
    constructor(props){
        super(props)

        this.state = { 
            minHeight: window.innerHeight - 60
        }
    }

    render(){
        return (
            <div>

                <div className='content-background' style={{backgroundImage: `url(${BeachBackground})`}}></div>
                <div className="content-container" style={{minHeight: this.state.minHeight}}>
                    <div className="content-sub-container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/our-story" component={OurStoryPage} />
                            <Route path="/location" component={SitePage} />
                            <Route path="/registry" component={RegistryPage} />
                            <Route path="/rsvp" component={RSVPPage} />
                            <Route component={Page404} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content