import React, { Component } from 'react'
import Navigation from './navigation'
import Content from './content'
import Background from './background'
import Footer from './footer'
import '../css/boostrap/css/bootstrap.css'
import '../less/styles.less'

const App = () => (
    <div>
        <Background />
        <Navigation />
        <Content />
        <Footer />
    </div>
)

export default App