
'use client'

import { sign } from "crypto";
import { useState } from "react"
import { signup } from "../actions/users/signUp";

const Signupfrom = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = async () => {
    setMessage('creating');
    const messageu = await signup(email,password);
    setMessage(messageu)
  }

  return (
    <div className="flex flex-col justify-center content-center">
      <input className="m-2 w-64 bg-white h-8" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="m-2 w-64 bg-white h-8" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Sign up</button>
      <p>{message}</p>
    </div>
  )
}

export default Signupfrom
