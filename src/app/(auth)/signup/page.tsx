import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
        <div className='max-w-screen-xl mx-auto border-4 border-solid m-8 border-slate-50/50 md:p-24 rounded-3xl 
        flex items-center justify-center backdrop-brightness-100'>
            <div className="signup-pg-image">
              <img src='/signup-image.png'/>
            </div>
            <div className="signup-form shadow-md backdrop-blur-xl border-solid border-2 bg-opacity-25 border-slate-50/50 rounded-3xl pt-14 pb-14 p-5">
              <img src="" alt="" />
              <h1 className='text-white font-semibold text-4xl'>Create Account</h1>
              <p className='text-white font-normal text-sm mb-6'>Create An Account And access Services Easily</p>

              <div className="form-control mb-5">
                <label className='text-white text-sm font-semibold mb-2' htmlFor="">User Name</label><br />
                <input type="text" className='h-12 w-full rounded-2xl shadow-md border-solid border-2 border-slate-50/50 bg-transparent text-white px-5 outline-none'/>
              </div>

              <div className="form-control mb-5">
                <label className='text-white text-sm font-semibold mb-2' htmlFor="">E-mail</label><br />
                <input type="text" className='h-12 w-full rounded-2xl shadow-md border-solid border-2 border-slate-50/50 bg-transparent text-white px-5 outline-none'/>
              </div>

              <div className="form-control mb-5">
                <label className='text-white text-sm font-semibold mb-2' htmlFor="">Phone Number</label><br />
                <input type="text" className='h-12 w-full rounded-2xl shadow-md border-solid border-2 border-slate-50/50 bg-transparent text-white px-5 outline-none'/>
              </div>
              <p className='text-center font-light text-xs text-black mt-2 mb-14'>By sharing your details, you agree to our <Link href="" className='text-[#981493] font-semibold'>*T&C. & Privacy Policy</Link></p>

              <div className="form-control mb-5 w-full text-center">
                <button className='h-10 w-32 text-white bg-[#981493] shadow-md rounded-2xl m-auto'>Sign up</button>
              </div>

              <p className='text-center font-semibold text-sm text-[#3C64B1]'>Already have an account! <Link href="" className='text-white'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default page
