import React, { Component } from "react";
import logo from '../img/logowhite.png'
import { Segment } from "semantic-ui-react"

class Landing extends Component {
 
  componentDidMount(){
    let el = document.querySelector('.blurb');
    let text = document.querySelector('.blurb-text');
  el.classList.add('fade-out');
  text.classList.add('fade-out-text');
  }

  render() {

    return (
      <div className="landingpg">
          <img className="logoimg" src={logo} alt="" />
          <Segment raised inverted className="blurb">
          <p>Whether you're a seasoned traveler or 
          just about to embark on your first big trip, 
          Scratch&Map is a personal way to trace and 
          display your world travels. <br/><br/>Indicate the countries you’ve 
          visited by using this interactive app. <br/><br/>Share your stories 
          with everyone you know and remember all of your fantastic journeys.</p>
          </Segment>
          <img className="logoimg" src={logo} />
      </div>
    );
  }
}
export default Landing;