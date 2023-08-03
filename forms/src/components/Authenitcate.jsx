import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

const Authenticate = (props) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const buttonHandler = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      });
      const data = await response.json();

      setSuccessMessage(data.message);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Authenticate</h2>
      <p>Token: {props.token}</p>

      <button onClick={buttonHandler}>Authenticate</button>

      {error && <p>Error: {error}</p>}
      {successMessage && <p>Message: {successMessage}</p>}
    </>
  );
};

export default Authenticate;
