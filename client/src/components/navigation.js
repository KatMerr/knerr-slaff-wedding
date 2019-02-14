import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Element } from 'react-scroll'

class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobileNav: false,
            mobileOpen: false
        }

        this.handleMenuOpen = this.handleMenuOpen.bind(this)
        this.handleRouteChange = this.handleRouteChange.bind(this)
    }

    componentDidMount(){
        this.setState({
            mobileNav: (window.innerWidth < 481)
        })
    }

    handleMenuOpen(){
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })
    }

    handleRouteChange(){
        this.setState({
            mobileOpen: false
        })
    }

    render(){
        return(
            <div className={
                ((this.state.mobileNav) ? "mobile " : "desktop ") +
                ((this.state.mobileOpen) ? "opened " : "closed ") +
                "navigation-container"}>
                <Element name="navigation"></Element>
                {(this.state.mobileNav) ? 
                    <div className="burger-outer-container">
                        <div className="burger-button" onClick={this.handleMenuOpen}>
                            <div className="burger-container">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div> : null }
                <div className="links-container">
                    <Link to="navigation" smooth={true} duration={500}>
                        <NavLink exact to="/"  onClick={this.handleRouteChange}>Home</NavLink>
                    </Link>
                    <Link to="navigation" smooth={true} duration={500}>
                        <NavLink to="/our-story" onClick={this.handleRouteChange}>Our Stories</NavLink>
                    </Link>
                    <Link to="navigation" smooth={true} duration={500}>
                        <NavLink to="/location-info" onClick={this.handleRouteChange}>Location & Info</NavLink>
                    </Link>
                    <Link to="navigation" smooth={true} duration={500}>
                        <NavLink to="/registry" onClick={this.handleRouteChange}>Registry</NavLink>
                    </Link>
                    <Link to="navigation" smooth={true} duration={500}>
                        <NavLink to="/rsvp" onClick={this.handleRouteChange}>RSVP</NavLink>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigation