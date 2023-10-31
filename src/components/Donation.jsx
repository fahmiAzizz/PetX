import React from 'react'
import dog from '../assets/dog5.png'

const Donation = () => {
    return (
        <div className=' w-full h-auto mx-auto' id='donation'>
            <div className=' max-w-screen-md grid  md:grid-cols-2 justify-center items-center mx-auto'>
                <div className='m-5 md:m-2'>
                    <h1 className='text-3xl mb-2'>In Addiotion You Can Make A Donation</h1>
                    <p className='mt-4'>No rekening/ rekening number</p>
                    <div className='pt-2 mb-5'>
                        <p className='p-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 inline text-white '>+1112 2233 3444 9933 8877</p>
                    </div>
                    <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing eli-Eos, minus? In, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='m-2'>
                    <img src={dog} alt="" className='w-64 mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default Donation