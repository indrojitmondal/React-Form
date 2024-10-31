import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // const [name, handleNameChange]= useInputState('Bil Gates');
    const emailState = useInputState('rajoni@sajoni.com')
    const handleSubmit = e=>{
        e.preventDefault();
        // console.log(name);
        console.log(emailState.value);
    }
    return (
        <div>

            <form onSubmit={handleSubmit} >

                {/* <input value={name} onChange={handleNameChange} type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" /> */}

                <br />

                <input {...emailState} type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />

                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />

                <br />
                <br />

                <input type="submit" value='Submit' className="input input-bordered w-full max-w-xs" />





            </form>

        </div>
    );
};

export default HookForm;