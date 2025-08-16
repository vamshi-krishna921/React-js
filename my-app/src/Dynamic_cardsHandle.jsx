import React from 'react'

function Dynamic_cardsHandle({data,handleRemove}) {
  return (
    <div className='w-[95%] h-[80%] flex justify-center items-center gap-4'>
        {data.map((item,index) => {
           return <div key={index} className='w-65 h-80 rounded-md flex flex-col justify-center gap-3 items-center shadow shadow-zinc-500'>
            <div className='size-23 rounded-full bg-zinc-100 overflow-hidden'>
                <img src={item.image} className='w-full h-full object-cover' alt="" />
            </div>
            <h2 className='text-[20px] font-semibold'>{item.name}</h2>
            <p className='text-[14px] -mt-3 text-zinc-400'>{item.gmail}</p>
            <p className='text-[14px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus perferendis.</p>
            <button onClick={() => handleRemove(index)} className='px-4 py-1 bg-zinc-500 rounded-2xl cursor-pointer hover:bg-red-600'>Remove</button>
        </div>
        })}
    </div>
  )
}

export default Dynamic_cardsHandle