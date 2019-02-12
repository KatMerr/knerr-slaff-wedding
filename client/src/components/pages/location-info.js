import React, { Component } from 'react'
import ComponentHeader from '../component-header'
import OceanPlace from '../../../../images/ocean-place-16-9.jpg'
import HeaderImage from '../header-image'
import InfoRow from '../info-row'

const genericInformation = [
    {
        heading: "Date",
        info: "Friday, June 14, 2019"
    }, {
        heading: "Start Time",
        info: "4:00 PM"
    }, {
        heading: "Location",
        info: "Ocean Place Resort & Spa, Long Branch NJ"
    }, {
        heading: "Address",
        info: "1 Ocean Blvd, Long Branch, NJ 07740"
    }
]

export default () => <div>
    <div className="location-container">
    
        <ComponentHeader heading="Wedding Information" underline={true} />
        <div>
            <HeaderImage src={OceanPlace} />
            {genericInformation.map((info, i) => <InfoRow heading={info.heading} info={info.info} key={i} />)}
        </div>
        <ComponentHeader heading="Location & Accommodations" underline={true} />
        <div>
            <div className="map-container">
                <iframe width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Ocean%20Place%20Resort%20and%20Spa&key=AIzaSyBT-P9AacF8Y3rLhx4M5LcnUV-f1yAOTZo"></iframe>
            </div>
            <h4 className="inline-header">Hotels</h4>
            <div className="paragraph"><h5>Ocean Place Resort & Spa</h5> - Overlooking a magnificent stretch of beach in Long Branch, Ocean Place will be the hub for all wedding activities. The stay includes access to a guest-only private beach owned by the resort. We’d love for guests to stay the weekend here and party with us, but completely understand if you are unable to. Their website can be viewed <a href="https://www.oceanplace.com/">here</a>.</div> 
            <div className="paragraph"><h5>Alternative Locations</h5> - We have arranged a list of alternate options in the area that can be found <a href="https://www.HotelPlanner.com/EventPage4816989">here</a>. There are also plenty of options at <a href="https://www.airbnb.com/">airbnb.com</a> for the surrounding area.</div>
            <h4 className="inline-header">Day of Accommodations</h4>
            <div className="paragraph"><h5>Dinner</h5> -  The dinner will be served buffet style with a plethora of food options and open bar access at both the cocktail hour and reception. We are able to take special dietary requests, please notify Matt at <a href="mailto:mattjknerr@gmail.com">mattjknerr@gmail.com</a> (or by other means) if we need to make arrangements.</div>
            <div className="paragraph"><h5>Parking</h5> - Parking will be complementary. Its recommended to park in front of the building and enter through the main lobby, where the wedding party will be guiding guests towards the ceremony location. The Maitre ‘d will handle validating parking at the conclusion of the event.</div>
            <div className="paragraph"><h5>Accessibility</h5> - The ceremony and cocktail hour will take place in the same location, but the reception hall is located on the second floor of the hotel. Hotel employees can give access to service elevators upon request.</div>
        </div>
    </div>
</div>