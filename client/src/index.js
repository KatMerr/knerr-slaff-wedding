import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
import { BrowserRouter } from 'react-router-dom'
import promise from 'es6-promise'

promise.polyfill()

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)