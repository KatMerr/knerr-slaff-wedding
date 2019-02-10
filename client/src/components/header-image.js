import React from 'react'

const headerStyle = {
    "margin": "30px 0",
    "width": "100%"
}

export default (props) => <img className="header-image" src={props.src} style={headerStyle} />