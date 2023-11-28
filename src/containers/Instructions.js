import React, { Component } from 'react';
import './Instructions.css';
import { Redirect } from "react-router-dom";

class Instructions extends Component {

    constructor(props) {
        super(props);
        this.state = {
          continue: false,
        }
      }

      keyFunction = (event) => {
        if(event.keyCode === 81) {
          this.setState((state, props) => ({
            continue: true
          }));
        }
      }

      componentDidMount(){
        document.addEventListener("keydown", this.keyFunction, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.keyFunction, false);
      }

      render() {

        if(this.state.continue === true){
          return <Redirect to="/Trial_P" />
        }

        return (
          <div className="Instructions">
            <input type="hidden"/>
            <header className="Instructions-header">
            <div className="text-container">
              <p className="Instructions-text">
              This is a hearing test.
              <br /><br /> Please determine the maximum acceptable volume of the white noise (100% is ideal!)
              <br /><br /> You can close this tab (or hit "back" if you didn't open this in a new tab) once you record the volume
              <br /><br />Press "Q to continue"
              </p>
            </div>
            </header>
          </div>
        );
      }
    }

export default Instructions;
