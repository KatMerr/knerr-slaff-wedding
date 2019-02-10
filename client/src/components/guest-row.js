import React from 'react' 

export default (props) => 
    <tr>
        <td>{props.guest.name}</td>
        <td>{props.guest.plus_one.toString()}</td>
        <td>{props.guest.plus_one_name}</td>
        <td>{props.guest.email}</td>
        <td>{props.guest.staying_at_hotel.toString()}</td>
    </tr>