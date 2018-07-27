import React, { Component } from 'react'

class RSVPForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            confirmedName: false,
            allowedPlusOne: false
        }

        this.confirmRSVP = this.confirmRSVP.bind(this)
        this.checkName = this.checkName.bind(this)
    }

    checkName(event){
        let name = event.target.value

        //Check DB for name if it exists (DB should be populated with names of invited guests)
        //Check DB for if guest is allowed a +1
    }

    confirmRSVP(event){
        alert("Confirmed")
    }

    render(){
        return (
            <form onSubmit={this.confirmRSVP}>
                <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.checkName} />
                <label htmlFor="guestName">Guest's Name: </label>
                    <input type="text" id="guestName" />
                <fieldset>
                    <legend>Attending</legend>
                    <input type="checkbox" id="ceremony" />
                    <label htmlFor="ceremony">Ceremony</label>
                    <input type="checkbox" id="dinner" />
                    <label htmlFor="dinner">Dinner</label>
                </fieldset>
                <input type="radio" id="hotel" />
                <label htmlFor="hotel">Are you staying at Ocean Place Resort and Spa?</label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default RSVPForm