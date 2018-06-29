import React, { Component } from 'react';


class Home extends Component {

    render() {
        return (
            <div>               
                <h1>Home page</h1>
                <p>all content that is bordered is WEB COMPONENT</p>
                <p>React is used regulary as single page app, was used mostly as router and for composing web component's on subpages</p>
                <h2>Browser Support</h2>
                <ul>
                    <li>Chrome (and all Chromium based browsers)</li>
                    <li>Safari</li>
                    <li>Edge</li>
                    <li>Firefox</li>
                    <li>IE 11</li>      
                </ul>                         
            </div>
        );
}
}
export default Home;