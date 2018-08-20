import React from 'react'
import { NavLink } from 'react-router-dom'
import { Element } from 'react-scroll'

export default () => (
    <div className="navigation-container">
        <Element name="navigation"></Element>
        <div className="links-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/our-story">Our Story</NavLink>
            <NavLink to="/location">Location</NavLink>
            <NavLink to="/attire">Attire</NavLink>
            <NavLink to="/rsvp">RSVP</NavLink>
        </div>
    </div>
)