import React from 'react';
import './App.css';
import profile from './pic.jpg';
import background from './road.jpg';
import background2 from './highway.jpg';

import './style.css';
/*"{/*import './smooth-scroll.js';}"*/


function App() {
  return (
    <div className="App">
      <div>
        <title>CURRICULUM VIATE</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        {/*----bootstrap link----*/}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/*--header*/}
        <section id="header">
          <div className="container text-center">
            <div className="user-box">
              <img src={profile} />
              <h1>Othello Mkhonto</h1>
              <h2>Software Developer</h2>
            </div>
          </div>
          <div className="scroll-btn">
            <div className="scroll-bar"><a href="#about"><span> </span></a></div>    
          </div>
        </section>
        {/*---User Info section-*/}
        <section id="user-info">
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#"><img src={background} /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" />
                {/*span class="navbar-toggler-icon"></span-*/}
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#top">HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">ABOUT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">CV</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">CONTACT</a>
                  </li> 
                </ul>
              </div>
            </nav>
          </div>
        </section>
        {/*-------About--------*/}
        <div className="about container" id="about">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={background2} className="profile-img" />
            </div>
            <div className="col-md-6">
              <h3>About Me</h3>
              <p>
                I mostly invest most of my time learning about stocks and how Artificial Intelligence communicates with currencies as robots.
                I am passionate about knowing more about market robots and i plan on studying them further next year after i graduate. I am flexible and quick to learn new things.
                <b> </b><br />
                <b>Name(s):</b> Othello Mkhonto<br />
                <b>Profession:</b> Student<br /> 
                <b>Physical Address:</b>  Ermelo , 28 jannie de waal street,2350<br />
                <b>Postal Address:</b>  P.O Box 6471 Mkhonto 2735<br />
                <b>Contact number:</b>  0764281993<br />
                <b>Email:</b> othellotmkhonto@gmail.com<br />	
                <b>ID Number:</b> 9910206028087<br />
                <b>Date of birth:</b> 1999/10/20<br />
                <b>Nationality:</b> South African<br />
                <b>Languages:</b> English, Afrikaans,Zulu<br />
              </p>
              <div className="skills-bar">
               
                <p>C#</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '88%'}}>88%</div>
                </div>
                <p>C</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '80%'}}>72%</div>
                </div>
                <p>C++</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '75%'}}>70%</div>
                </div>
                <p>Java</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '68%'}}>75%</div>
                </div>
                <p>HTML/CSS</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '80%'}}>85%</div>
                </div>
                <p>Vue</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '76%'}}>70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-------Social media icons-------*/}
        <div className="social-icons">
          <ul>
            <a href="#"><li><i className="fa fa-facebook" /></li></a>0
            <a href="#"><li><i className="fa fa-instagram" /></li></a>
    
          </ul>
        </div>
        {/*----------RESUME-------------*/}
        <div className="resume" id="resume">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-center">Education &amp; Experiences</h3>
                <ul className="timeline">
                  <li>
                    <h4><span>Tertiary Education </span> 2018-2020</h4>
                    <p>
                      <b>Institution:</b> North-West University<br />
                      <b>City:</b> Potchefstroom<br />
                      <b>Degree:</b> Bachelor of Science<br />
                      <b>Field of Study:</b> Information Technology 
                    </p>
                    <h5><span>2013-2017 </span> Secondary Education</h5>
                    <p>
                      <b>Institution:</b> Ermelo High School<br />
                      <b>City:</b> Ermelo, mpumalanga<br />
                      <b>Subjects:</b>
                      •	Mathematics
                      •	Physical Science
                      •	Life Science
                      •	Business Studies
                      •	English
                      •	Afrikaans
                      •	Life orientation
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*----CONTACT ME------*/}
        <div className="contact" id="contact">
          <div className="container text-center">
            <h1>Contact Me</h1>
            <p>Hello my name is Othello. <br />Feel free to contact me with the details provided below </p>
            <div className="row">
              <div className="col-md-4">
                <i className="fa fa-phone" />
                <p>+27 764281993</p>
              </div>
              <div className="col-md-4">
                <i className="fa fa-envelope" />
                <p>othellotmkhonto@gmail.com</p>
              </div>
              <div className="col-md-4">
                <i className="fa fa-internet-explorer" />
                <p>www.othellomkhonto.com</p>
              </div>
            </div>
            <button type="button" className="btn btn-primary"><i className="fa fa-download" />Resume</button>
            <button type="button" className="btn btn-primary"><i className="fa fa-rocket" />Hire Me</button>
          </div>
        </div>
        {/*------Smooth Scroll----*/}
      </div>
      </div>
    );
  }

export default App;
