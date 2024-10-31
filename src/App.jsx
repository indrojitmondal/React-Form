import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateForm from './components/StateForm/StateForm'
// import RefForm from './components/RefForm/RefForm'
import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import { data } from 'autoprefixer'

function App() {

  const handleSignUp = data=>{
  
    console.log(data.name, data.email, data.password);
 }
  
  const handleUpdateProfile = data=>{
    // e.preventDefault();
    console.log(data.name, data.email, data.password);
 }


  

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
     {/* <StateForm></StateForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}

     <ReusableForm formTitle={'Sign UP'}

        handleSubmit={handleSignUp}
     >
      <h2>Sign Up</h2>
      <p>Please sign up right now</p>

     </ReusableForm>
     <ReusableForm formTitle={'Profile Update'} 

          submitBtnText='Update'
          handleSubmit={handleUpdateProfile}
     >
          <h2>Update Profile</h2>
      <p>Always keep your profile updated</p>

     </ReusableForm>
    
    </>
  )
}

export default App
