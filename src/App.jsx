import React, { Component } from 'react';
import styles from "./App.css";
import firebase, {googleProvider} from "./firebase";
import Routes from "./containers/Routes";
import {Link} from "@reach/router";
import Main from "./containers/Main";

class App extends Component{
  
    state = { 
      user: null
    };

    getSignInOutJsx = () => {

      const username = this.state.user ? this.state.user.displayName : "No user";
      const image = this.state.user ? this.state.user.photoURL : "No user";
      const email = this.state.user ? this.state.user.email : "No user";
      if (this.state.user) {
        return (
          <span className={styles.main}>
                  <h1>Hi {username}</h1>
                  <img src={image}  alt="pic"/>
                  <p> {email}</p>
                  <button onClick={this.signOut}>Sign out</button>
                  <h2>this link will work if you have signed in: 
                    <Link to="main">
                      < Main />
                    </Link>
                  </h2>
          </span>
        );
      } else {
        return (
          <span className={styles.main}>
              <h1>Please Sign in</h1>
              <button onClick={this.signIn}>Sign in</button>
          </span>
        );
      }
    }

  componentDidMount() {
    this.getUser();
  }
    
  signIn = () => {
    firebase.auth().signInWithRedirect(googleProvider) 
  }

  signOut = () => {
    firebase
    .auth()
    .signOut()
    .then(() => {
      this.setState({ user: null });
    })
    .catch(error => {
      console.log(error);
    });
};
  
  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }


  render() {
    console.log(this.state.user);
  return (
    <>
      < Routes signIn={this.getSignInOutJsx}/>
    </>
  ); 
 }
}
export default App;
