import React from 'react' 

const inlineStyles = {
    "height" : "400px",
    "width" : "300px",
}

export default (props) => <img className={props.float + " inline-image"} src={props.src} style={inlineStyles} />