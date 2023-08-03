import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenitcate'
// import './App.css'

const App = () => {
  
  const [token, setToken] = useState(null)

  return (
    <>
    <h1>Booyah</h1>
    <SignUpForm setToken={setToken}/>
    <Authenticate token={token} />
    </>
  );
}

export default App
