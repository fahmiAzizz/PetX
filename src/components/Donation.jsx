import React from 'react'
import cat from '../assets/cat3.png'

const Donation = () => {
    return (
        <div className=' w-full h-screen md:h-auto mx-auto justify-center items-center py-20' id='donation'>
            <div className=' max-w-screen-md grid  md:grid-cols-2 justify-center items-center mx-auto'>
                <div className='mx-5 md:m-2'>
                    <h1 className='text-3xl title-font font-semibold mb-2'>In Addiotion You Can Make A Donation</h1>
                    <p className='mt-4'>Donation To:</p>
                    <div className='pt-2 mb-5'>
                        <p className='p-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 inline text-white '>+1112 2233 3444 9933 8877</p>
                    </div>
                    <p className='text-md text-justify'>Your compassion and generosity can change the fate of animals in distress. Please consider making a donation to support our efforts in rescuing, rehabilitating, and rehoming them.</p>
                </div>
                <div className='mx-2'>
                    <img src={cat} alt="" className='md:w-64 w-56 mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default Donation