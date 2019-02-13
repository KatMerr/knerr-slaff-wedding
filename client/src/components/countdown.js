import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import ComponentHeader from '../components/component-header'

class CountdownClock extends Component {
    constructor(props){
        super(props)

        this.state = {
            daysRemaining: 0,
            hoursRemaining: 0,
            minutesRemaining: 0,
            secondsRemaining: 0
        }
        this.tick = this.tick.bind(this)
        this.calculateTimeRemaining = this.calculateTimeRemaining.bind(this)
    }

    componentDidMount(){
        //Set the initial state
        this.setState(this.calculateTimeRemaining(this.props.targetDate))
        //Set interval to update the state every second
        this.startCountdown = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        //Clear the interval if the component is unmounted
        clearInterval(this.startCountdown)
    }

    //Function to update the state every second
    tick(){
        this.setState(this.calculateTimeRemaining(this.props.targetDate))
    }

    //Calculates the difference between the current date and time and the target date
    //Returns updated state values for Days, Hours, Minutes, and Seconds
    calculateTimeRemaining(targetDate){
        //One day in ms
        const ONE_DAY = 1000*60*60*24
        //Time as of function call
        const CURRENT_TIME = new Date()

        //Get ms values of current time and target time
        const currentTime_ms = CURRENT_TIME.valueOf(), targetDate_ms = targetDate.valueOf()

        //Calculate ms difference between target date and current date, if current current date is larger, time as passed, return 0
        const difference = (targetDate_ms < currentTime_ms) ? 0 : targetDate_ms - currentTime_ms
        const difference_DATE = new Date(difference)

        //Return updated state values
        return {
            daysRemaining: Math.round(difference/ONE_DAY),
            hoursRemaining: difference_DATE.getHours(),
            minutesRemaining: difference_DATE.getMinutes(),
            secondsRemaining: difference_DATE.getSeconds()
        }
    }

    render(){
        return(
            <div className="countdown-clock">
                <ComponentHeader heading="Countdown" underline={true} />
                <div className="countdown-numbers">
                    <div className="pair large">
                        <div className="number">{this.state.daysRemaining}</div>
                        <span className="label">Days</span>
                    </div>
                    <div className="pair small">
                        <div className="number">{this.state.hoursRemaining}</div>
                        <span className="label">Hours</span>
                    </div>
                    <div className="pair small">
                        <div className="number">{this.state.minutesRemaining}</div>
                        <span className="label">Minutes</span>
                    </div>
                    <div className="pair small">
                        <div className="number">{this.state.secondsRemaining}</div>
                        <span className="label">Seconds</span>
                    </div>
                </div>
            </div>
        )
    }
}

CountdownClock.defaultProps = {
    targetDate: new Date(),
    heading: ""
}

CountdownClock.propTypes = {
    //Date to compare the current time to
    targetDate: PropTypes.instanceOf(Date).isRequired,
    //Heading for the Countdown
    heading: PropTypes.String
}

export default CountdownClock