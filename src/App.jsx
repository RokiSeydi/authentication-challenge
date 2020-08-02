import React, { Component } from 'react';
import styles from "./App.module.scss";
import firebase, {googleProvider} from "./firebase";

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
          <span className={styles.profile}>
                  <h1>Hey {username} !</h1>
                  <img src={image}  alt="pic"/>
                  <div className={styles.paragraph}>
                  <p> you have signed in with: {email}</p>
                  </div>
                  <button onClick={this.signOut} className={styles.btnOut}>Sign out</button>
          </span>
        );
      } else {
        return (
          <span className={styles.main}>
              <h1>Please Sign In</h1>                            
              <button onClick={this.signIn} className={styles.btn}>Sign in</button>         
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
    firebase.auth().signOut();
  }
  
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
      <div>
        {this.getSignInOutJsx()}
      </div>
    </>
  );
}
}
export default App;