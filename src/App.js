import React, { useEffect } from "react";
import "./styles.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import { Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Login from "./Login";
import { useStateValue } from "./StateProvider";



const promise = loadStripe(
 "pk_test_51MIuncSFATPLRPvmLQBeJYBGRAs1EEOSFbA7fYevp2W0xAv70ltLe9xbA9NXxL3DRfZKxWboW8iB8OktyTHPDLQZ00wgHOryd4"
);

 export default function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);
  
  onAuthStateChanged(auth, (user) => {
    if (authUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      dispatch({
        type: 'SET-USER',
        user: authUser
      })
    } else {
      // User is signed out
      // ...
      dispatch({
      type: 'SET-USER',
      user: null      
    })
    }
  });
  });
  }, []);


  // the user just logged in / the user was logged in

  return (
    
    <div className="App">
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
        
          {/* <Route path="/payment" element={<Payment/>}></Route> */}
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/payment" element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        }></Route>
         
          
      </Routes>
      </div>
   
  );
}
 
     

        
        
       