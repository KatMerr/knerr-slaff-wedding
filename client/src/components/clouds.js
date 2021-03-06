import React, { Component } from 'react'
import CloudLogo from '../../../images/cloud-logo.gif'
import WhiteCloud from '../../../images/white-cloud.png'
import RandomService from '../utils/randomNumbers'

class Clouds extends Component {
    constructor(props){
        super(props)

        this.numberOfClouds = props.numClouds;
        this.clouds = [];
        for (var i = 0; i < this.numberOfClouds; i++){
            this.clouds.push({
                size: RandomService.numberBetween(6, 22) + "%",
                locationX: RandomService.upperLimit(100) + "%",
                locationY: RandomService.upperLimit(65) + "%",
                transition: "left linear 500s"
            })
        }

        this.state = {
            clouds: this.clouds
        }
        this.beginDrift = this.beginDrift.bind(this)
        this.beginDriftOfLastCloud = this.beginDriftOfLastCloud.bind(this)
        this.generateCloud = this.generateCloud.bind(this)
    }

    componentWillUnmount(){
        clearInterval(this.timeout1)
        clearInterval(this.interval1)
        clearInterval(this.interval2)
    }

    componentDidMount(){
        this.timeout1 = setTimeout(this.beginDrift)
        this.interval1 = setInterval(this.generateCloud, 7500)
        this.interval2 = setInterval(this.beginDriftOfLastCloud, 7505)
    }

    beginDrift(){
        let transitionTime
        let clouds = this.state.clouds
        clouds.forEach(cloud => {
            transitionTime = RandomService.numberBetween(250, 600)
            cloud.locationX = "-2000px"
            cloud.transition = "left linear " + transitionTime + "s"
        })
        this.setState({
            clouds: clouds
        })
    }

    beginDriftOfLastCloud(){
        let stateCopy = this.state
        let lastIndex = stateCopy.clouds.length - 1
        stateCopy.clouds[lastIndex] = {
            size: stateCopy.clouds[lastIndex].size,
            locationX: "-2000px",
            locationY: stateCopy.clouds[lastIndex].locationY,
            transition: "left linear " + RandomService.numberBetween(250, 600) + "s"
        }
        this.setState(stateCopy)
    }

    generateCloud(){
        let newCloud = {
            size: RandomService.numberBetween(7, 20) + "%",
            locationX: "100%",
            locationY: RandomService.upperLimit(65) + "%",
            transition: "left linear 500s"
        }
        this.setState({
            clouds: [
                ...this.state.clouds,
                newCloud
            ]
        })
    }

    render(){
        return (
            <div className="clouds-container">
                <img src={CloudLogo} className="cloud-logo" />
                {
                    this.state.clouds.map((cloud, i) =>
                        <div className="white-cloud" style={{
                            width: cloud.size, 
                            top: cloud.locationY, 
                            left: cloud.locationX,
                            transition: cloud.transition }} key={i}>
                            <img src={WhiteCloud} style={{width: "100%"}} />
                        </div>
                    )
                }
            </div>
        )
    }
}

Clouds.defaultProps = {
    numClouds: 15
}

export default Clouds