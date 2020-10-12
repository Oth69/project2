import React, { Component } from 'react';
import Two from './Components/two';

export default class Two extends Component {
    render() {
    return (

      <doctype html>
        <meta charSet="UTF-8" />
        <title>personal information</title>
        <link rel="stylesheet" href="style2.css" />
        <div className="wrapper">
          <div className="personalInfo">
            <div className="title">Personal Information</div>
            <div className="input-fields">
              <div className="items">
                <label htmlFor="Personal Data" className="label">Personal Data</label>
              </div>  
              <div className="items">
                <label htmlFor="Name:                      Othello" className="label">Name:                      Othello</label>
              </div>
              <div className="items">
                <label htmlFor="Surname:                   Mkhonto" className="label">Surname:                   Mkhonto</label>
              </div>
              <div className="items">
                <label htmlFor="Date of birth:             1999/10/20" className="label">Date of birth:             1999/10/20</label>
              </div>
              <div className="items">
                <label htmlFor="Nationality:               South African" className="label">Nationality:               South African</label>
              </div>
              <div className="items">
                <label htmlFor="Languages:                 Afrikaans,English,Zulu" className="label">Languages:                 Afrikaans,English,Zulu</label>
              </div>
              <div className="items">
                <label htmlFor="ID Number:                 9910206028087" className="label">ID Number:                 9910206028087</label>
              </div>
              <div className="items">
                <label htmlFor="Bank:                      ABSA" className="label">Bank:                      ABSA</label>
              </div>
              <div className="items">
                <label htmlFor="Branch:                    420144" className="label">Branch:                    420144</label>
              </div>
              <div className="items">
                <label htmlFor="Account number:            4094277283" className="label">Account number:            4094277283</label>
              </div>
            </div>
          </div>
        </div></doctype>
      );
    }
  };