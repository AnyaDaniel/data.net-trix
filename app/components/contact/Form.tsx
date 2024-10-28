import React from 'react'

const Form = () => {
  return (
    <div>
        <form action="mailto:contact@innowise.com" method='post' >
            <div className="flex justify-center items-center gap-10">
                <input type="text" name="" id="" placeholder='Name*' required className='outline-none border-b-2 border-[#2e2e2e] text-[#2e2e2e] placeholder:text-[#02010180] w-full p-2 bg-transparent' />
                <input type="email" name="" id="" placeholder='Email*' required className='outline-none border-b-2 border-[#2e2e2e] text-[#2e2e2e] placeholder:text-[#02010180] w-full p-2 bg-transparent' />
            </div>
            <div className="flex justify-center items-center gap-10 py-5">
                <input type="text" name="" id="" placeholder='Subject*' required className='outline-none border-b-2 border-[#2e2e2e] text-[#2e2e2e] placeholder:text-[#02010180] w-full p-2 bg-transparent' />
                <input type="text" name="" id="" placeholder='Phone' className='outline-none border-b-2 border-[#2e2e2e] text-[#2e2e2e] placeholder:text-[#02010180] w-full p-2 bg-transparent' />
            </div>
            <textarea name="" id="" rows={5} placeholder='Send us your request' className='outline-none border-b-2 border-[#2e2e2e] text-[#2e2e2e] placeholder:text-[#02010180] w-full p-2 bg-transparent resize-none'></textarea>
            <input type="submit" value="Send" className='py-2 px-10 bg-[#13901F] hover:bg-[#F8C301] mt-5 text-[#f8f8f9] hover:text-[#2e2e2e] font-[700] cursor-pointer' />
        </form>
        
    </div>
  )
}

export default Form