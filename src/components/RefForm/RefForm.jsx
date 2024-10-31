import React, { useEffect, useRef } from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    useEffect( ()=>{
        emailRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input defaultValue={'John dev'} ref={nameRef} type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />

                <br />

                <input ref={emailRef} type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />

                <input ref={passwordRef} type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />

                <br />
                <br />

                <input type="submit" value='Submit' className="input input-bordered w-full max-w-xs" />





            </form>


        </div>
    );
};

export default RefForm;