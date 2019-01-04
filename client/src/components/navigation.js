import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Element } from 'react-scroll'

export default () => (
    <div className="navigation-container">
        <Element name="navigation"></Element>
        <div className="links-container">
            <Link to="navigation" smooth={true} duration={500}>
                <NavLink exact to="/">Home</NavLink>
            </Link>
            <Link to="navigation" smooth={true} duration={500}>
                <NavLink to="/our-story">Our Story</NavLink>
            </Link>
            <Link to="navigation" smooth={true} duration={500}>
                <NavLink to="/location">Location</NavLink>
            </Link>
            <Link to="navigation" smooth={true} duration={500}>
                <NavLink to="/registry">Registry</NavLink>
            </Link>
            <Link to="navigation" smooth={true} duration={500}>
                <NavLink to="/rsvp">RSVP</NavLink>
            </Link>
        </div>
    </div>
)