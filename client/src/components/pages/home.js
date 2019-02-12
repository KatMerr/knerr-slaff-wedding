import React from 'react'
import HomePageHeaderImage from '../../../../images/home-16-9.jpg'
import HeaderImage from '../header-image'
import ComponentHeader from '../component-header'

export default () => (
    <div className="home-container">
        <ComponentHeader heading="Home" underline={true} />
        Thank you for visit our website! We're happy to be able to celebrate this important occassion with our closest family and friends. To navigate the site, please use the navigation bar located above.
        <HeaderImage src={HomePageHeaderImage} />
    </div>
)