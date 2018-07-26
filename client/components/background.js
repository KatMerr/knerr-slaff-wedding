import React, { Component } from 'react'
import Clouds from './clouds'
import RandomService from '../services/randomNumbers'
import OceanBackground from '../../images/ocean-background-med.jpg'

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            height: window.innerHeight
        }

        this.numberOfClouds = RandomService.numberBetween(15, 20)
    }

    render() {
        return (
            <div className="header-container">
                <img src={OceanBackground} style={{
                    width: "100%", position: "relative", maxHeight: `${this.state.height}px`}}
                />
                <Clouds numClouds={this.numberOfClouds} />
                <div className="action-text">
                    Done cloud watching? More info below.
                </div>
            </div>
        )
    }
}

export default Header