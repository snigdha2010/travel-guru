import React, { useState, useContext } from 'react';
import './LogIn.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo1 from '../../resources/Icon/google.png';


firebase.initializeApp(firebaseConfig);
const LogIn = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [logedIn, setLogedIn ] = useContext(UserContext);
    const [signUpUser,setSigneUpUser ] = useState(true)
    const [ user,setUser ] = useState({
        name:'',
        password1:'', 
        password2:'',
        email:''
    })

    console.log(logedIn.email)
    const handleInput = (e) =>{  
        let isValid
        if(e.target.name === 'email'){
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)  
        }
        if(e.target.name == 'password1' || e.target.name == 'password2'){
           const islength = (e.target.value).length>5
           const isNumber = /\d{1}/.test(e.target.value);
           isValid = isNumber && islength;
        console.log(isValid)
        }
        if(isValid){
            const newUserInfo = {...user}
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        } 
    }
  
  
    const handleSubmit = (e)=>{
        if(user.password1 != user.password2){
            alert('Password does not match')
        }
        if(signUpUser && user.password1 == user.password2){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password1)
            .then(res=>{
                console.log("signed up!")
                const newUserInfo = {
                    ...user,
                    error : ''
                }
                setUser(newUserInfo);
                handleResponse(newUserInfo);
            })
            .catch(function(err) {
                const newUserInfo = {...user,
                    error: err.message
                }
                setUser(newUserInfo)
              });
        }
        if(!signUpUser){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password1)
            .then(res=>{
                const newUserInfo = {
                    ...user,
                    error : ''
                }
                setUser(newUserInfo);
                handleResponse(newUserInfo)
            })
            .catch(function(err) {
                const newUserInfo = {...user,
                    error: err.message
                }
                setUser(newUserInfo)
              });
        }
        e.preventDefault();
    }

    const handleFaceBookSignIn = () =>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
            handleResponse(user)
          }).catch(function(error) {  
            var errorMessage = error.message;
            console.log(errorMessage)
         
          });
    }
    const handleGoogleSignIn = () =>{

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
          .then(function(result) {
            var user = result.user;
            handleResponse(user)
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
           
          });
        }  
    const handleResponse = (res)=>{
        setLogedIn(res)
        history.replace(from)
    }
    return (
        <React.Fragment>
        <Header/>
        <div className='text-center m-4 text-dark'>
            {signUpUser? <h2 className='' >Create an Account</h2>:<h2>LogIn</h2>}
           <form className= 'login-form mt-4' onSubmit ={handleSubmit}>
             { signUpUser && <input onBlur={handleInput} type='text' name='first-name' className='no-outline' placeholder="First Name"/>
            }  <br/>
             { signUpUser && <input onBlur={handleInput} type='text' name='last-name' className='no-outline' placeholder="Last Name"/> 
             } <br/>
              <input onBlur={handleInput} type='text' name='email' className='no-outline' placeholder="Username or Email" required/>
              <br/>
              <input onBlur={handleInput} type='password' name='password1' className='no-outline' placeholder="Password" required/>
              <br/>
             { signUpUser && <input onBlur={handleInput} type='password' name='password2' className='no-outline' placeholder="Confirm Password" required/>
             } <br/>
              <input className='form-control mt-4' type="submit" value="Create an accoutnt"/>
            <p onClick={()=>setSigneUpUser(!signUpUser)} className='mt-4'>{signUpUser?'Already have an account?':'Create an Account?'} </p>
            </form> 
            <p style={{color:'red'}}>{user.error}</p>
            <button onClick={handleGoogleSignIn}>Continu with Google</button>
            <br/><br/><button onClick={ handleFaceBookSignIn}>Continu with Facebook</button>
        </div>
        </React.Fragment>
    );
};

export default LogIn;