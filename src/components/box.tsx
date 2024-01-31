import React from 'react'

type Props = {
  h1:string;
  num:string;
  h2:string;
  h3:string;
  logo:boolean;
}

function box({h1,num,h2,h3,logo}: Props) {
  return ( 
    <div className='bg-white p-6 border-5 flex  flex-col rounded-xl min-h-52 min-w-96 gap-8'>
       <h1 className='text-xl font-semibold'>{h1}</h1>
       <div>
       <div className='flex'>
       <p className='text-[3rem]'>{num}%</p>
       {logo?(<img src='boxicon.svg'/>):("")}
       </div>
       <p>{h2}</p>
       </div>
       <div className='flex relative '>
       <a className='text-[#734A00]  '>{h3}</a>
       <img src='rr.svg' alt='yo'/>
       </div>
    </div>
  )
}

export default box