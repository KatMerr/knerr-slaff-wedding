import React, { Component } from 'react'

class RSVPForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            notAttending: false,
            missingAttendanceError: props.missingAttendanceError,
            nameError: props.nameError
        }

        this.handleCheck = this.handleCheck.bind(this)
        this.validateSubmit = this.validateSubmit.bind(this)
        this.validateAttendanceError = this.validateAttendanceError.bind(this)
    }

    validateSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const guestInfo = {
            'names': data.get("names"),
            'number_attending': data.get("number_attending"),
            'not_attending': !!(data.get("not_attending")),
        }

        if (!guestInfo.names){
            this.setState({nameError: true})
            return;
        } else if (!guestInfo.number_attending && !guestInfo.not_attending){
            this.setState({missingAttendanceError: true})
            return;
        } else if (guestInfo.number_attending && guestInfo.not_attending) {
            this.setState({attendanceError: true})
            return;
        }
        guestInfo.names = "M" + guestInfo.names;

        this.props.postGuest(guestInfo)
        return;
    }

    handleInputChange = (e) => {
        const names = e.target.value;
        if (names){
            this.setState({nameError: false})
        }
        return;
    }

    validateAttendanceError = (e) => {
        const val = e.target.value;
        if (val && this.state.missingAttendanceError){
            this.setState({missingAttendanceError: false})
        } else if (!val && this.state.attendanceError){
            this.setState({attendanceError: false})
        }
    }

    handleCheck = (e) => {
        this.setState({
            notAttending: !this.state.notAttending
        })

        this.validateAttendanceError(e)
    }

    render(){
        return (
            <form onSubmit={this.validateSubmit} className='rsvp'>
                <div className='title'>Please respond on or before May 1, 2019<span className="small-text">Note: If you have submitted the paper RSVP form, you do not need to fill this out.</span></div>
                <div className='field'>
                    <label htmlFor="names">M </label>
                    <input type="text" id="names" name="names" onChange={this.handleInputChange} />
                    {(this.state.nameError) ? <div className="error">Please let us know who will be attending.</div> : null}
                </div>
                <div className='field'>
                    <label htmlFor="number_attending">Number Attending</label>
                    <input type="number" id="number_attending" name="number_attending" min="0" onChange={this.validateAttendanceError}></input>
                </div>
                <div className='field' onClick={this.handleCheck}>
                    <label htmlFor="not_attending">Unable to attend</label>
                    <div className={(this.state.notAttending) ? "fake-box checked" : "fake-box not-checked"}><span>X</span></div>
                    <input type="checkbox" id="not_attending" name="not_attending" value={true} checked={this.state.notAttending}></input>
                    {(this.state.missingAttendanceError) ? <div className="error">Please let us know the number attending.</div> : null}
                    {(this.state.attendanceError) ? <div className="error">Please let us know either the number attending, or if you will be unable to make it.</div> : null}
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default RSVPForm