import React, { Component } from 'react'

class Loader extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { loading } = this.props
        const classes = ['app-loader'];
        if (!loading){
            classes.push('complete')
        }
        const classes_str = classes.join(' ')
        
        return (
            <div className={classes_str}>Loading</div>
        )
    }
}

export default Loader