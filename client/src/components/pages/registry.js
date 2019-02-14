import React, { Component } from 'react'
import KnotLogo from '../../../../images/the-knot-logo.gif'
import TargetLogo from '../../../../images/target-logo.gif'
import MacysLogo from '../../../../images/macys-logo.gif'
import WestElmLogo from '../../../../images/west-elm-logo.gif'
import ComponentHeader from '../component-header'

export default () => (
    <div>
        <ComponentHeader heading="Registry" underline={true} />
        <div>If you would like to view a general summary of everything on our registry or contribute to our Cash Registry, click the button below:</div>
        <div className='button-container'>
            <a target="_blank" href="https://registry.theknot.com/shannon-slaff-matt-knerr-june-2019-nj/24042422"><div className='registry-button'><img src={KnotLogo} /></div></a>
        </div>
        <div>Otherwise click directly to the individual store registeries:</div>
        <div className='button-container'>
            <a target="_blank" href="tgt.gifts/d77f347fc54449acb024e517fc4f7f28"><div className='registry-button'><img src={TargetLogo} /></div></a>
            <a target="_blank" href="https://www.westelm.com/registry/f5dhhtbfkr/registry-list.html"><div className='registry-button'><img src={WestElmLogo} /></div></a>
            <a target="_blank" href="https://www.macys.com/wgl/registry/guest/6973594"><div className='registry-button'><img src={MacysLogo} /></div></a>
        </div>
    </div>
)