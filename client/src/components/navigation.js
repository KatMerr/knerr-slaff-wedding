import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <div className="navigation-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/our-story">Our Story</NavLink>
        <NavLink to="/location">Location</NavLink>
        <NavLink to="/attire">Attire</NavLink>
        <NavLink to="/rsvp">RSVP</NavLink>
    </div>
)