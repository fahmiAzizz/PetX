import React from 'react'
import Carousel from './Carousel.jsx'

const Pet = () => {
    return (
        <div id='adoption' className=' pt-24 bg-slate-200 w-full h-screen p-10 relative'>
            <p className=' mx-auto text-2xl text-center p-8'>Our friend who are looking for a house</p>
            <div className='max-w-screen-lg w-full mx-auto justify-center items-center'>
                <Carousel />
            </div>
        </div>
    )
}

export default Pet