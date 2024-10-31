import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateForm from './components/StateForm/StateForm'
import RefForm from './components/RefForm/RefForm'
import HookForm from './components/HookForm/HookForm'

function App() {
  
  

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
     {/* <StateForm></StateForm> */}
     {/* <RefForm></RefForm> */}
     <HookForm></HookForm>
    
    </>
  )
}

export default App
