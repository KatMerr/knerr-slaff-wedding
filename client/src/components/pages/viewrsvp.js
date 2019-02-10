import React, { Component } from 'react'
import { getAllGuests } from '../../utils/apiCalls'
import GuestRow from '../guest-row'

class viewRSVP extends Component {
    constructor(){
        super()
        this.state = {
            guests: []
        }
    }

    componentDidMount(){
        getAllGuests().then((guests) => {
            this.setState({
                guests: guests
            })
        })
    }

    render(){
        return(
            <div>                
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Bringing Plus One</th>
                            <th>Plus One Name</th>
                            <th>Email</th>
                            <th>Staying At Hotel</th>
                        </tr>
                        { 
                            this.state.guests.map((guest, i) => <GuestRow guest={guest} key={i} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default viewRSVP