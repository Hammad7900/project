import React from 'react'

function NewsletterBox() {

    const onSubmitHandle=()=>{
event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
<p className='text-gray-400 mt-3'>Lorem ispum a simple dummy text of a printing and typesetting industry.
         </p>

   <form onSubmit={onSubmitHandle} className='w-full max-w-xl flex items-center gap-3 mx-auto my-6 border  border-gray-300 pl-3'>
 <input className='w-full sm:flex-1 outline-none  ' type='email' placeholder='Enter Your Email' required/>

        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
        
        
</div>
  )
}

export default NewsletterBox 