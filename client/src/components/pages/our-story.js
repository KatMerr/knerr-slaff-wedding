import React, { Component } from 'react'
import ComponentHeader from '../component-header'
import InlineImage from '../inline-image';
import ProposalImage from '../../../../images/the-proposal-3-4.jpg' 
import OurStoryImage from '../../../../images/our-story-3-4.jpg' 
import ShannonImage from '../../../../images/shannon-3-4.jpg' 
import MattImage from '../../../../images/matt-3-4.jpg'

export default () =>  (

<div className="our-story">
    <ComponentHeader heading="Our Story" underline={true} />
    <div className="story clearfix"><InlineImage src={ShannonImage} float="right" /><p><h3>Shannon Slaff</h3> grew up in northern NJ, where the three states meet, in the middle of the woods. As a child, she often played outside with her older sister, younger brother, and family dog, Zulu. She spent a great amount of high school and college volunteering and on social committees raising awareness for domestic violence, responsibility with alcohol, and Super Smash Brothers (a game she isn’t even good at).</p>
    <p>Shannon is currently a conference coordinator for AMI, bringing together today’s Einsteins and Newtons of the plastic industry to discuss topics way over her head. When she isn’t personally throwing plastic straws in the ocean, she’s going to the gym, volunteering for Crisis Text Line, and wasting money at Target.</p></div>
    <ComponentHeader underline={true} />
    <div className="story clearfix"><InlineImage src={MattImage} float="left" /><p><h3>Matt Knerr</h3> is from Emmaus, PA where he attended private catholic school all his life with his older brother and sister. He spent his childhood with friends in his neighborhood, playing Runescape and soccer as the goalie and team captain. His college career was filled with Ultimate Frisbee where he, again, became the team captain.</p>
    <p>Matt currently works for Susquehanna University as the sole website developer (making for lonely department parties). When he isn’t reffing basketball in the winter, Matt constantly tries to relive his college youth by participating in not one, not two, but three different frisbee groups.</p></div>
    <ComponentHeader underline={true} />
    <div className="story clearfix"><InlineImage src={OurStoryImage} float="right" /><p><h3>Our Story</h3> begins in the Spring of 2013 at Susquehanna University. During one of her DJ shifts at the college radio station, Matt called in to request a song (“Ali in the Jungle, ” by <i>The Hours</i>). Moments later, he knocked on the DJ booth to dance for her and she awkwardly gave him a thumbs up. It turns out, Matt was working the local Pi Day booth for math club and waited for Shannon to leave her shift so he could thank her for playing his song and tell her she has a cute voice. Then they completely forgot about each other for half a year.</p>
    <p>Much later, Shannon entered the DJ booth to start her next shift and Matt recognized her “cute” voice again. He admitted he’d often listened to her radio hours and never forgot about Pi Day. They could never be separated after.</p></div>
    <ComponentHeader underline={true} />
    <div className="story clearfix"><InlineImage src={ProposalImage} float="left" /><p><h3>The Proposal</h3> went flawlessly since there wasn't one. They just picked the ring and they went with it. Marriage had never been something they were leading up to, it was just inevitable (that’s what happens when you don’t want to start dating again).</p></div>
    <div className="spacer"></div>
</div>

)