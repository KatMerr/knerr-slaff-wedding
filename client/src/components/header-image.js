import React from 'react'

const headerStyle = {
    "margin": "30px auto",
    "width": "100%",
    "maxWidth": "700px",
    "display": "block"
}

export default (props) => <img className="header-image" src={props.src} style={headerStyle} />