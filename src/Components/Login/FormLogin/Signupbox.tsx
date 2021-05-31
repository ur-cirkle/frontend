import { blockStatement } from '@babel/types';
import React from 'react';
import Sbox from './Signup.style';

// type SignupboxProps = {
// str:string;
// }


export const Signupbox = () => 
<Sbox>
        <h2>Welcome! <br/>
            Log in to continue
        </h2>

        <input type="text" placeholder="Enter your Username"></input><br />
        <input type="password" id="password" placeholder="Enter your Password"></input><br />
        <label htmlFor="show">
            <i className="fas fa-eye-slash"></i>
            <i className="fas fa-eye"></i>
        </label>
        <input type="checkbox" id="show"></input>
        <a href="#">Forget Password?</a><br />
        <button>Log in</button>
        <h3>Don't have account?<span> Sign up</span></h3>
</Sbox>

export default Signupbox;
