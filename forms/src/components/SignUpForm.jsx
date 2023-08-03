import { useState } from "react";
const API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup'

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try{
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          username, 
          password
        }),
        headers : {
          "Content-Type":"application/json"
        }
      });
      const data = await response.json();
      props.setToken(data.token);
    }
    catch(err){
      setError(err.message);
    }

  }

  return (
    <>
      <h2>Sign Up</h2>

      {error && <p>Error: {error}</p> }

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
