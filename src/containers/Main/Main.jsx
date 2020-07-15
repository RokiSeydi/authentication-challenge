import React, { Component } from 'react';


class Main extends Component {
    state = {  }

//     getSignInOutJsx = () => {

//         const username = this.state.user ? this.state.user.displayName : "No user";
//         const image = this.state.user ? this.state.user.photoURL : "No user";
//         const email = this.state.user ? this.state.user.email : "No user";
//         if (this.state.user) {
//           return (
//             <span className={styles.main}>
//                     <h1>Hi {username}</h1>
//                     <img src={image}  alt="pic"/>
//                     <p> {email}</p>
//                     <button onClick={this.signOut}>Sign out</button>
//                     <h2>this link will work if you have signed in: </h2>
//             </span>
//           );
//         } else {
//           return (
//             <span className={styles.main}>
//                 <h1>Please Sign in</h1>
//                 <button onClick={this.signIn}>Sign in</button>
//             </span>
//           );
//         }
//       }
  
//     componentDidMount() {
//       this.getUser();
//     }
      
//     signIn = () => {
//       firebase.auth().signInWithRedirect(googleProvider) 
//     }
  
//     signOut = () => {
//       firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         this.setState({ user: null });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
    
//     getUser = () => {
//       firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//           this.setState({ user });
//         } else {
//           this.setState({ user: null });
//         }
//       })
//     }
  
  
//     render() {
//       console.log(this.state.user);
//     return (
//       <>
//         < Routes signIn={this.getSignInOutJsx}/>
//       </>
//     ); 
//    }
//   }
    render() { 
        return (
            <>
            <h1>Hello User</h1>
            </>
          );
      
    }
}
 
export default Main;