import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from './UseAuth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Singing = () => {
const navigate=useNavigate()
const validationStyle={
  color:'red',
  fontSize:'12px',
  fontWeight:'600'
  }
 const{createUser ,updateUser}= UseAuth()
 const {  handleSubmit,formState: { errors },trigger,register,reset }=useForm ();  



    const handleToSingIn=e=>{
      e.preventDefault()
      const form=e.target;
      const name=form.name.value;
      const image=form.image.value
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password,name,image);

      createUser(email,password)
      .then(result=>{
        if(result.user){
          updateUser(name,image)
          .then(()=>{
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
           return navigate('/')
          })
          .catch(error=>console.log(error))
        }
      } )
      .catch(error=>console.log(error))



    }
    return (
        <div className=''>
        <div className='w-full  '>

        <div className="card shrink-0 w-full  lg:w-2/3 mx-auto bg-red-500  shadow-none lg:shadow-2xl ">
  <form onSubmit={ handleSubmit(handleToSingIn) } className="card-body w-full  mx-auto flex justify-center items-center ">

<div className='lg:flex lg:space-x-5'>
<div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Image URL</span>
      </label>
      <input type="url" name='image' placeholder="Image URL " className="input input-bordered" required />
    </div>
</div>

 <div className='lg:flex lg:space-x-5'>
 <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required={true}
      {...register("email", {
        required: "Email is Required!!!" ,
        pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
        message: "Invalid email address" 
      
        }})}
        onKeyUp={() => {trigger("email")}} />
        
        {
            errors.email && (
            <p style={validationStyle     } >{errors.email.message}</p>
          )}
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required
       {...register("password", {
        required: "You must specify a password",
        pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
        message: "Password should contain at least one number and one    special character"
        },
       minLength: {
       value: 8,
       message: "Password must be more than 8 characters"
       },
       maxLength: {
       value: 20,
       message: "Password must be less than 20 characters"
       },
       })}
       onKeyUp={() => {trigger("password")}}
       error={Boolean(errors.password)}
      />
{
            errors.password && <p style={validationStyle} >{errors.password.message}</p>
          }
    </div>
 </div>

 <div>
<h1>Already have an account ?Please <Link to='/login' >Login</Link> </h1>
 </div>



    <div className="form-control mt-6">
    <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
    </div>
  </form>
         </div>
        </div>
         

</div>
    
    );
};

export default Singing;