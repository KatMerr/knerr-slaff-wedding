import React, { Component } from 'react'
import { getGuest, postGuest } from '../../utils/apiCalls'

class RSVPForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            allowedPlusOne: false,
            bringingPlusOne: false,
            uniqueEmail: true,
            showRSVP: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleGuest = this.toggleGuest.bind(this)
    }

    toggleGuest(e){
        this.setState({
            bringingPlusOne: !this.state.bringingPlusOne
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const data = new FormData(e.target)
        const guestInfo = {
            'name': data.get("name"),
            'email': data.get("email"),
            'plus_one': data.has('plus_one') ? true : false,
            'plus_one_name': data.get("plus_one_name"),
            'staying_at_hotel': data.has("hotel") ? true : false
        }

        const email = guestInfo["email"]

        getGuest(email)
        .then((existingGuest) => {
            if (!existingGuest.guest){
                postGuest(guestInfo)
                .then((newGuest) => {
                    return console.log(newGuest)
                })
            } else {
                this.setState({
                    uniqueEmail: false
                })
            }
            return existingGuest
        })
    }

    render(){
        return (
            (this.state.showRSVP) ? 
            <form onSubmit={this.handleSubmit} className='rsvp'>
                <div class='title'>RSVP FORM</div>
                <div class='field'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" />
                </div>
                <div class='field'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required />
                    {(!this.state.uniqueEmail) ? <div>Please enter a unique Email Address</div> : null}
                </div>
                <div class='field'>
                    <input type="checkbox" name="plus_one" id="plus_one" onChange={this.toggleGuest} />
                    <label htmlFor="plus_one">Are you bringing a guest?</label>
                </div>
                {(this.state.bringingPlusOne) ? <div class='field'><span><label htmlFor="guestName">Guest's Name: </label>
                <input type="text" name="plus_one_name" id="guestName" /></span></div> : null }
                <div class='field'>
                    <input type="checkbox" id="hotel" name="hotel" />
                    <label htmlFor="hotel">Are you staying at Ocean Place Resort and Spa?</label>
                </div>
                <div class='field'>
                    <button>Send Data</button>
                </div>
            </form>
            : <div>RSVP Coming Soon!</div>
        )
    }
}

export default RSVPForm