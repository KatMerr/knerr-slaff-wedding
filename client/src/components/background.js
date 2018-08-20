import React, { Component } from 'react'
import Clouds from './clouds'
import RandomService from '../utils/randomNumbers'
import OceanBackground from '../../../images/ocean-background-4-3.jpg'
import { Link } from 'react-scroll'

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
                <Link to="navigation" smooth={true} duration={500}>
                    <div className="action-text">
                        Done cloud watching? Click Here.
                    </div>
                </Link>
            </div>
        )
    }
}

export default Header