import React from 'react'

const Hero = () => {
    return (
        <div id='home' className='bg-center bg-cat bg-cover w-full h-screen text-white'>
            <div className='my-auto justify-center items-center h-screen  max-w-screen-lg mx-auto p-4  grid md:grid-cols-2'>
                <div className=''>
                    <p className='text-5xl font-semibold title-font'>Not only people need a house</p>
                    <p className='text-lg my-2'>Welcome to our animal adoption community, where love for animals and compassion come together to create a better world, one pet adoption at a time.</p>
                    <button className='font-semibold bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl p-2 inline text-lg text-black hover:scale-110 cursor-pointer duration-200'>make a friend</button>
                </div>
            </div>
        </div>
    )
}

export default Hero