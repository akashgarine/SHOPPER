import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import hand_icon from '../../components/assets/home.jpg';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="fullscreen-container">
      <div className="fullscreen-image">
        <img src={hand_icon} alt="Background" />
      </div>
      <div className="form-container">
        <section>
          {isSignIn ? (
            <SignInForm toggleForm={toggleForm} />
          ) : (
            <SignUpForm toggleForm={toggleForm} />
          )}
        </section>
      </div>
    </div>
  );
};

// Login Form Component
const SignInForm = ({ toggleForm }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      toast.error('Please fill in all login fields');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/api/login', {
        email: loginEmail,
        password: loginPassword,
      });

      const authToken = data.token;
      const userId = data.userId;
      const role = data.message.includes('Admin') ? 'admin' : 'user';

      localStorage.setItem('authToken', authToken);
      localStorage.setItem('userId', userId);
      localStorage.setItem('role', role);

      toast.success(`${data.message}! Redirecting...`);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      toast.error('Incorrect email or password');
    }



  };

  return (
    <form id="signInForm" className="signInForm" onSubmit={handleLogin}>
      <h2 className="form-title">Sign In</h2>
      <label htmlFor="email" className="label">Email</label>
      <input
        type="email"
        id="email"
        className="input"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <label htmlFor="password" className="label">Password</label>
      <input
        type="password"
        id="password"
        className="input"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button className="button signInBtn" type="submit">Sign In</button>
      <h4 className="signUpMsg">
        You don't have an account? 
        <span className="signUptag" onClick={toggleForm}> Sign up</span>
      </h4>
    </form>
  );
};

// Registration Form Component
const SignUpForm = ({ toggleForm }) => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerUsername || !registerEmail || !registerPassword) {
      toast.error('Please fill in all registration fields');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/api/register', {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      });
      console.log('hi')
      toast.success('Registration successful!');
      setTimeout(() => {
        toggleForm();
      }, 1000);
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return (
    <form id="signUpForm" className="signUpForm" onSubmit={handleRegister}>
      <h2 className="form-title">Sign Up</h2>
      <label htmlFor="name" className="label">Username</label>
      <input
        type="text"
        id="name"
        className="input"
        value={registerUsername}
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <label htmlFor="email" className="label">Email</label>
      <input
        type="email"
        id="email"
        className="input"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <label htmlFor="password" className="label">Password</label>
      <input
        type="password"
        id="password"
        className="input"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button className="button signUpBtn" type="submit">Sign Up</button>
      <h4 className="signInMsg">
        Already have an account? 
        <span className="signInTag" onClick={toggleForm}> Sign in</span>
      </h4>
    </form>
  );
};

export default LoginSignUp;
