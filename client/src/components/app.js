import React, { Component } from 'react'
import Navigation from './navigation'
import Content from './content'
import Background from './background'
import Footer from './footer'
import '../css/boostrap/css/bootstrap.css'
import '../less/styles.less'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    render() {
        const { loading } = this.state;

        if (!loading){
            setTimeout(() => {document.getElementById("app-loader").classList.add("complete")}, 500)
        }

        return (
            <div>
                <Background />
                <Navigation />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App