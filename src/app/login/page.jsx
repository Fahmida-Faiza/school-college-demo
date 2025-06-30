"use client"

// import { redirect } from 'next/dist/server/api-utils';s
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import {signIn} from "next-auth/react"
// import SocialSignin from '@/components/SocialSignin';



const page = () => {
    // login
    const handleLogin = async (event) => {
        event.preventDefault();
       const email= event.target.email.value;
        const  password=  event.target.password.value;
        const resp = await signIn('credentials' ,{
            email, 
            password,
             redirect: false
        })
        console.log(resp)
        
       
    }
    
    return (
        <div className='container mx-auto px-24 bg-slate-100 text-black my-10'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 lg:gap-12'>
                <div className='  md: py-4 lg:py-10'>
                    <Image src="/pic.jpg" height="400" width="540" alt="login" />
                </div>
                <div className='border-2 lg:p-12 '>
                    <form onSubmit={handleLogin} action="" >
                        <h1 className='text-3xl text-green-400'>Login page</h1>
                        <label htmlFor="email">Email</label><br></br>
                        <input  type="text" name="email" placeholder="your email" className="mt-3 input input-bordered w-full max-w-xs bg-white text-black" />
                        <br></br>
                        <label htmlFor="password">password</label><br></br>
                        <input type="text"
                         name="password"
                          placeholder="your password" 
                          className="mt-3 input input-bordered w-full max-w-xs  bg-white text-black" />
                        <br />
                        
                        <button type="submit" className='mt-4 btn btn-primary'>SignIn</button>
                    {/* google login r kaj */}
                    {/* <div  className='my-12 text-center'>
                        <h6>or Sign in with</h6>
                        <SocialSignin/>
                    </div> */}

                    {/*  */}
                    </form>

                    <h3 className='text-xl'>not have an account? <Link className='text-red-400 text-2xl ' href={'/signup'}>Signup</Link></h3>
                </div>

            </div>
        </div>
    );
};

export default page;