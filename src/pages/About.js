import React, { Component } from 'react';
import "./About.css";

import profile_pic from "../assets/profile-pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img className="profile_image" src={profile_pic}>
            </img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Anish Jampana</div>
            <div className="brief_description">
              <b>Hi, my name is Anish Jampana and I'm a student at the University of Illinois. </b>
              <b>Nice to meet you all!</b>
            </div>
            </div>
        </div>
      </div>
    )
  }
}