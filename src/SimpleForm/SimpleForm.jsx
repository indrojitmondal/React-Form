import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e)=>{

        e.preventDefault();
        
        console.log('Submitted form');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
       

    }
    return (
        <div>

            <h2>Simple Form</h2>

            <form onSubmit={handleSubmit} >

            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                
                <br />
                
                <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />
                
                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                
                <br />
                <br />

                <input  type="submit"  value='Submit' className="input input-bordered w-full max-w-xs" />
                

                
               

            </form>
        </div>
    );
};

export default SimpleForm;