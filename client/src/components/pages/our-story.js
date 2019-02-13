import React from 'react'
import StorySection from '../story-section'
import ComponentHeader from '../component-header'
import ProposalImage from '../../../../images/the-proposal-3-4.jpg' 
import OurStoryImage from '../../../../images/our-story-3-4.jpg' 
import ShannonImage from '../../../../images/shannon-3-4.jpg' 
import MattImage from '../../../../images/matt-3-4.jpg'
import CatsImage from '../../../../images/cats-inline.jpg'
import JamaicaImage from '../../../../images/jamaica-inline.jpg'
import HospitalImage from '../../../../images/hospital-inline.jpg'
import BlackSeashellIcon from '../../../../images/seashell-icon-black.svg'

const stories = [
    {
        float: "right",
        image: ShannonImage,
        subHeader: "Shannon Slaff",
        paragraphs: [
            "grew up in northern NJ, where the three states meet, in the middle of the woods. As a child, she often played outside with her older sister, younger brother, and family dog, Zulu. She spent a great amount of high school and college volunteering and on social committees raising awareness for domestic violence, responsibility with alcohol, and homecoming.",
            "Shannon is currently a conference coordinator for AMI, bringing together today’s Einsteins and Newtons of the plastic industry. When she isn’t at the gym, she’s volunteering for Crisis Text Line, playing board games, and travelling for work."
        ],
        includeHeader: false
    }, {
        float: "left",
        image: MattImage,
        subHeader: "Matt Knerr",
        paragraphs: [
            "is from Emmaus, PA where he attended private catholic school all his life with his older brother and sister. He spent his childhood with friends in his neighborhood, playing Runescape and soccer as the goalie and team captain. His college career was filled with Ultimate Frisbee where he, again, became the team captain.",
            "Matt currently works for Susquehanna University as the sole website developer (making for lonely department parties). When he isn’t reffing basketball in the winter, Matt constantly tries to relive his college youth by participating in not one, not two, but three different frisbee groups."
        ],
        includeHeader: true
    }, {
        float: "right",
        image: OurStoryImage,
        subHeader: "Our Story",
        paragraphs: [
            "begins in the Spring of 2013 at Susquehanna University. During one of her DJ shifts at the college radio station, Matt called in to request a song (“Ali in the Jungle” by The Hours). Moments later, he knocked on the DJ booth to dance for her and she awkwardly gave him a thumbs up. It turns out, Matt was working the local Pi Day booth for math club and waited for Shannon to leave her shift so he could thank her for playing his song and tell her she has a cute voice. Then they completely forgot about each other for half a year.",
            "Much later, Shannon entered the DJ booth to start her next shift and Matt recognized her “cute” voice again. He admitted he’d often listened to her radio hours and never forgot about Pi Day. They could never be separated after."
        ],
        includeHeader: true
    }, {
        float: "left",
        image: ProposalImage,
        subHeader: "The Proposal",
        paragraphs: [
            "didn’t need to be something showy and surprising. Marriage had never been something Shannon & Matt were leading up to; it was just inevitable. The day before they picked out the ring, they were sat on the couch and discussed what marriage meant to them. They agreed it’s more of what they already felt and do for the rest of their lives. The day they picked the ring involved a flea market in downtown State College, ice cream, and funky sunglasses."
        ],
        includeHeader: true
    }
]

const facts = [
    {
        fact: "Matt & Shannon have two cats, both of which Shannon picked out, but Matt loves more.",
        image: CatsImage
    },
    {
        fact: "Shannon cooks, Matt cleans. The split is about 40/60."
    },
    {
        fact: "Shannon & Matt attended their first wedding expo in State College, PA where many women complimented them for “being the only ones at the expo who look like a couple” and “enjoy being around each other.”  After the expo, they won an all-inclusive honeymoon at Montego Bay St. James, Jamaica! (which they already went on).",
        image: JamaicaImage
    },
    {
        fact: "Shannon & Matt’s favorite shows to binge watch include Bojack Horseman, Bob’s Burgers, crime documentaries, and whatever Matt Groening has made."
    },
    {
        fact: "Shannon & Matt enjoy playing board games, attending local festivals near their home in Reading, PA, and trying new subscription box dinners (only when they're free)"
    },
    {
        fact: "When Shannon was in the hospital throughout 2017, Matt always stayed with her, even overnight. During/after her surgery of Feb ‘18, Matt was there for her too!",
        image: HospitalImage
    },
    {
        fact: "Shannon forced Matt to pick his favorite color...its green (update: its copper)."
    }  
]

const listItemStyle = {
    "paddingLeft": "30px",
    "margin": "10px 0",
    "listStyle": "none",
    "backgroundImage": `url("${BlackSeashellIcon}")`,
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "left top",
    "backgroundSize": "20px"
}

export default () =>  (

<div className="our-story">

    <ComponentHeader underline={true} heading="Our Stories" />
    {(stories) ? stories.map((story, i) => <StorySection key={i} floatedImage={story.image} floatDirection={story.float} subHeader={story.subHeader} paragraphs={story.paragraphs} includeHeader={story.includeHeader} />) : null}
    <ComponentHeader underline={true} heading="Fun Facts" />
    <div className="story clearfix">
        <ul>
            {(facts) ? facts.map((fact, i) => <li key={i} className="fact" style={listItemStyle}>{fact.fact} {(fact.image) ? <img src={fact.image} style={{"display": "block", "margin": "30px auto", "maxWidth": "300px"}} /> : null} </li>) : null}
        </ul>
    </div>
    <div className="spacer"></div>
</div>

)