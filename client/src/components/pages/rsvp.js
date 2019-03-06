import React, { Component } from 'react'
import { postGuest } from '../../utils/apiCalls'
import RSVPForm from '../rsvp-form'
import ComponentHeader from '../component-header'

class RSVP extends Component {
    constructor(props){
        super(props)

        this.state = {
            showRSVP: true,
            nameError: false,
            attendenceError: false,
            isSubmitted: false,
            isAttending: false,
            names: ""
        }

        this.postGuest = this.postGuest.bind(this)
    }

    postGuest(guestInfo){
        postGuest(guestInfo)
        .then(() => {
            this.setState({
                names: guestInfo.names,
                isSubmitted: true,
                isAttending: !(guestInfo.not_attending)
            })
            return;
        })
    }

    render(){
        return (
            <div>
                <ComponentHeader underline={true} />
                {(this.state.showRSVP) ? 
                    (!this.state.isSubmitted) ? <RSVPForm postGuest={this.postGuest} nameError={this.state.nameError} attendenceError={this.state.attendenceError} /> :
                    <div className="response">Thank you for your RSVP. {(this.state.isAttending) ? <div>We're excited you'll join us and look forward to seeing you!<br />Please feel free the browser the rest of the site to view Shannon and Matt's stories, location, or the registry.</div> : <div>We're sorry to hear you will be unable to make it.</div>}</div>
                : <div>RSVP Coming Soon!</div>}
                <ComponentHeader underline={true} />
            </div>
        )
    }
}

export default RSVP