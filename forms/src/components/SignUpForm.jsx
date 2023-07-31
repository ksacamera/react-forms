import React, { useState } from 'react';

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const api url
  
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {  
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      // console.log(data)
      props.setToken(data.token);

      if (!response.ok) {
        if (response.status === 401) {
          setError('Invalid credentials. Please try again.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      } else {
        setError(null);
      }
      
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again later.');
    }
  }


  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: {""}
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </label>
        <label>
          Password: {""}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
