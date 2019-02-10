import React, { Component } from 'react'
import Navigation from './navigation'
import Content from './content'
import Background from './background'
import Footer from './footer'
import ViewRSVP from './pages/viewrsvp'
import '../less/styles.less'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            showContent: true
        }
    }

    componentDidMount() {
        if (window.location.pathname.includes("viewrsvp")){
            this.setState({
                showContent: false
            })
        }
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    render() {
        const { loading, showContent } = this.state;

        if (!loading && showContent){
            setTimeout(() => {document.getElementById("app-loader").classList.add("complete")}, 500)
        } else if (!showContent){
            document.getElementById("app-loader").classList.add("complete")
        }

        return (
            <div>
                {
                    (!this.state.showContent) 
                    ? <ViewRSVP /> 
                    : <div>
                        <Background />
                        <Navigation />
                        <Content />
                        <Footer />
                    </div>
                }
            </div>
        )
    }
}

export default App