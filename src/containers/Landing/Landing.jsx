import React, { Component } from 'react';
import {Link} from "@reach/router";
import Main from "../../containers/Main";

class Landing extends Component {

    render() { 
        return (
          <>
          {this.props.signIn()}
        
          </>
        )
        
    }
}
 
export default Landing;