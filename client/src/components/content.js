import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Page404 from './pages/page404'
import OurStoryPage from './pages/our-story'
import SitePage from './pages/location'
import AttirePage from './pages/attire'
import RSVPPage from './pages/rsvp'
import PlanksBackground from '../../../images/planks-background-4-3.jpg'
import BeachBackground from '../../../images/beach-background-4-3.jpg'
import BeachBackground2 from '../../../images/beach-background2-4-3.jpg'

class Content extends Component {
    constructor(props){
        super(props)

        this.state = { 
            minHeight: window.innerHeight - 60
        }
    }

    render(){
        return (
            <div className="content-container" 
                 style={{minHeight: `${this.state.minHeight}px`, height: `${this.state.minHeight}px`, backgroundImage: `url(${BeachBackground})`}}>
                <div className="content-sub-container" style={{position: 'relative', zIndex: 3, backgroundColor: 'rgba(255, 255, 255, .6)', height: '100%', maxWidth: "1000px", margin: '0 auto'}}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/our-story" component={OurStoryPage} />
                        <Route path="/location" component={SitePage} />
                        <Route path="/attire" component={AttirePage} />
                        <Route path="/rsvp" component={RSVPPage} />
                        <Route component={Page404} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Content