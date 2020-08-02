import React, { Component } from "react";
import firebase from "../../firebase";
import PrivateRoutes from "../../containers/PrivateRoutes";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";

import Landing from "../Landing";
import Main from "../Main";

class Routes extends Component {

  render() {
    return (
    <Router>
    <Landing path="/" signIn={this.props.signIn}/>
    <PrivateRoutes path="/" >
    <Main path="main"/>
    </PrivateRoutes>
    </Router>
    )
    }
  }

export default Routes;