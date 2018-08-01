import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class RSVPForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            confirmedName: false,
            allowedPlusOne: false,
            bringingPlusOne: false
        }

        this.checkName = this.checkName.bind(this)
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

        fetch("/api/guest", {
            method: 'POST',
            body: data
        })
    }

    checkName(event){
        fetch("/api/test/", { method: 'GET'})
        .then((res) => {
            if (res.status >= 400){
                throw new Error("Error")
            }
            return res.text()
        })
        .then(res => {
            console.log(res)
        })
        //Check DB for name if it exists (DB should be populated with names of invited guests)
        //Check DB for if guest is allowed a +1
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" onChange={this.checkName} />
                <input type="checkbox" name="plus_one" id="hotel" onChange={this.toggleGuest} />
                    <label htmlFor="plus_one">Are you bringing a guest?</label>
                {(this.state.bringingPlusOne) ? <span><label htmlFor="guestName">Guest's Name: </label>
                    <input type="text" name="plus_one_name" id="guestName" /></span> : null }
                
                <input type="checkbox" id="hotel" />
                <label htmlFor="hotel">Are you staying at Ocean Place Resort and Spa?</label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default RSVPForm