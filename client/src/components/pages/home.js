import React from 'react'
import OceanPlace from '../../../../images/ocean-place.png'
import ComponentHeader from '../component-header'

export default () => (
    <div className="home-container">
        <ComponentHeader heading="Home" underline={true} />
        Thank you for visit our website! We're happy to be able to celebrate this important occassion with our closest family and friends. Information on the day of can be found below, otherwise, use the navigation bar above.
        <ComponentHeader heading="Wedding Information" underline={true} />
        <div>
            <div className="banner-image"><img src={OceanPlace} /></div>
            <div className="line"><h3>Date: </h3><span>Firday, June 14, 2019</span></div>
            <div className="line"><h3>Start Time: </h3><span>4:00 PM</span></div>
            <div className="line"><h3>Location: </h3><span>Ocean Place Resort and Spa, Long Branch NJ</span></div>
            <div className="line"><h3>Address: </h3><span>1 Ocean Blvd, Long Branch, NJ 07740</span></div>
            <div className="line"><h3>Attire: </h3><span>Something about attire</span></div>
        </div>
    </div>
)