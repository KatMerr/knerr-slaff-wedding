import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class RSVPForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            allowedPlusOne: false,
            bringingPlusOne: false,
            uniqueEmail: true
        }

        let checkEmailTimeout

        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleGuest = this.toggleGuest.bind(this)
        this.postGuest = this.postGuest.bind(this)
    }

    toggleGuest(e){
        this.setState({
            bringingPlusOne: !this.state.bringingPlusOne
        })
    }

    postGuest(data){
        return fetch(`/api/guest/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res) =>{
            if (res.ok){
                return res.json()
            } else {
                throw new Error("Error Posting Guest")
            }
        }).then((data) => {
            return data.guest
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
        
        fetch(`/api/guest/${email}`, {
            method: 'GET'
        }).then((res) => {
            if (res.ok){
                return res.json()
            } else {
                throw new Error("Couldn't get guest")
            }
        }).then((existingGuest) => {
            if (!existingGuest.guest){
                return this.postGuest(guestInfo)
            }
            this.setState({
                uniqueEmail: false
            })
            return existingGuest
        })

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" />
                <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required />
                    {(!this.state.uniqueEmail) ? <div>Please enter a unique Email Address</div> : null}
                <input type="checkbox" name="plus_one" id="plus_one" onChange={this.toggleGuest} />
                    <label htmlFor="plus_one">Are you bringing a guest?</label>
                {(this.state.bringingPlusOne) ? <span><label htmlFor="guestName">Guest's Name: </label>
                    <input type="text" name="plus_one_name" id="guestName" /></span> : null }
                
                <input type="checkbox" id="hotel" name="hotel" />
                <label htmlFor="hotel">Are you staying at Ocean Place Resort and Spa?</label>
                <button>Send Data</button>
            </form>
        )
    }
}

export default RSVPForm