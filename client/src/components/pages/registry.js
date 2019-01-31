import React, { Component } from 'react'
import KnotLogo from '../../../../images/the-knot-logo.gif'
import TargetLogo from '../../../../images/target-logo.gif'
import MacysLogo from '../../../../images/macys-logo.gif'
import WestElmLogo from '../../../../images/west-elm-logo.gif'
import ComponentHeader from '../component-header'

export default () => (
    <div>
        <ComponentHeader heading="Registry" underline={true} />
        <div>Matt’s unprovoked dislike of TheKnot websites means this website isn’t one, but they do make for good registry collectors. If you would like to view a general summary of everything on our registry or contribute to our Cash Registry, click the button below:</div>
        <div className='button-container'>
            <div className='registry-button'><img src={KnotLogo} /></div>
        </div>
        <div>Otherwise join the protest and click directly to the individual store registeries:</div>
        <div className='button-container'>
            <div className='registry-button'><img src={TargetLogo} /></div>
            <div className='registry-button'><img src={WestElmLogo} /></div>
            <div className='registry-button'><img src={MacysLogo} /></div>
        </div>
    </div>
)