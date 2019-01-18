import React, { Component } from 'react'
import ComponentHeader from '../component-header'

export default () => <div>
    <div className="location-container">
        <ComponentHeader heading="Location & Accommodations" underline={true} />
        <div>
            <div className="map-container">
                <iframe width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Ocean%20Place%20Resort%20and%20Spa&key=AIzaSyBT-P9AacF8Y3rLhx4M5LcnUV-f1yAOTZo"></iframe>
            </div>
            <h4 className="inline-header">Hotels</h4>
            <div className="paragraph"><h5>Ocean Place</h5> - We will have a special pricing offer for guests planning to stay at Ocean Place and Resort for our wedding. The stay includes access to a guest-only private beach owned by the resort. We’d love for guests to stay the weekend here and celebrate with us, but completely understand if you are unable to. The location has been pinned on the map for your convinience.</div>
            <div className="paragraph"><h5>Alternative Locations</h5> - We have arranged a list of alternate options in the area that can be found <a href="https://www.HotelPlanner.com/EventPage4816989">here</a>. There are also plenty of options at <a href="https://www.airbnb.com/">airbnb.com</a> for the surrounding area.</div>
            <h4 className="inline-header">Day of Accommodations</h4>
            <div className="paragraph"><h5>Parking</h5> - Something about parking something about parking on site Yadda yadda yaddaSomething about parking something about parking on site Yadda yadda yaddaSomething about parking something about parking on site Yadda yadda yaddaSomething about parking something about parking on site Yadda yadda yaddaSomething about parking something about parking on site Yadda yadda yadda</div>
        </div>
    </div>
</div>