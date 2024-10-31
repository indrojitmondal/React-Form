import React from 'react';

const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {
  
    const handleLocalSubmit= e=>{

        e.preventDefault();

        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);

    }
    
    return (
        <div>

            {/* <h2 className='text-xl'>{formTitle}</h2> */}
            {children}

            <form onSubmit={handleLocalSubmit} >

                <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />

                <br />

                <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />

                <input type="text" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />

                <br />
                <br />

                <input type="submit" value={submitBtnText} className="input input-bordered w-full max-w-xs" />





            </form>

        </div>
    );
};

export default ReusableForm;