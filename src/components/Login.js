import React, { useState } from 'react';
import {Button,Form}  from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    let history = useHistory();

    function validateCredentials(){
        if(username.length > 0 && password.length >0){
            return true;
        } else{
            return false;
        }
    }

    async function handleSumbit(event){ 
        event.preventDefault();
        var url_login = "http://localhost:3000/login";
        var cred =  {
            "username":username,
            "password":password
        };

        axios.post(url_login, cred)
            .then(response =>{
                console.log(response);
                if(response.data.code=== 200){
                     console.log("Successfully logged in");
                     history.push('/employees');
                }else if(response.data.code===204){
                     console.log("Credentials does not match");
                }else{
                     console.log("Username does not exist");
                    alert("username does not exist");
                }
               
            }).catch(err =>{
                console.log("Error", err);
            });
    }


    return(
        <div className="Login">
           <form onSubmit={handleSumbit}>
               <Form.Group controlId="username" bssize="large">
                   <Form.Label>Username</Form.Label>
                   <Form.Control type="text" name="name" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
               </Form.Group>
               <Form.Group controlId="password" bssize="large">
                   <Form.Label>Password</Form.Label>  
                   <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
               </Form.Group>
               <Button /*disable={!validateCredentials}*/ type="submit">
                   Login
               </Button>
           </form>
        </div>
    );

}

export default Login;

