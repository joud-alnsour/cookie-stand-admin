import Main from "./components/Main";
import { useState } from "react";
import {useState, useEffect} from 'react'
import axios from 'axios';
import LoginForm from './components/LoginForm'


function Home() {

  const [token, setToken] = useState(null);
  const userData = {
    username: 'admin',
    password: 'admin'
  }
  return(
    <>
    <LoginForm/>
      <main/>
    </>
  )
}



