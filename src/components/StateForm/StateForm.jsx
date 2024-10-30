import React, { useState } from 'react';

const StateForm = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [password, setPassword]= useState(''); 
    const [error, setError] = useState('');
    const handleNameChange = e=>{
        setName(e.target.value);
    }
    const handleEmailChange = e=>{
        setEmail(e.target.value);
    }
    const handlePhoneChange = e=>{
        setPhone(e.target.value);
    }
    const handlePasswordChange = e=>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=>{

        e.preventDefault();
        
        console.log('Submitted form');
        console.log(name, email, phone, password);

        if(password.length <6){
            setError('Password must be 6 character or longer')
        }
        else{
            setError('');
        }
       

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input onChange={handleNameChange} type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />

                <br />

                <input onChange={handleEmailChange} type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />

                <input onChange={handlePhoneChange} type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                 <br />
                <input onChange={handlePasswordChange} type="password" name='phone' placeholder="Password" className="input input-bordered w-full max-w-xs" required />

                <br />
                <br />

                <input type="submit" value='Submit' className="input input-bordered w-full max-w-xs" />

               {
                error && <p>{error}</p>
               }



            </form>
        </div>
    );
};

export default StateForm;