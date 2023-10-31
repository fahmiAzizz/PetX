import React from 'react'
import dog from '../assets/dog4.png'

const About = () => {
    return (
        <div className='w-full h-auto mx-auto' id='about'>
            <div className=' max-w-screen-md grid  md:grid-cols-2 justify-center items-center mx-auto'>
                <div>
                    <img src={dog} alt="" className='w-64 mx-auto' />
                </div>
                <div className='m-5 '>
                    <h1 className='text-3xl'>About The Petshop</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing eli-Eos, minus? In, vitae deserunt dicta nisi velit impedit, laboriosam ipsam ut similique possims, dolor sapiente necessitatibus quo ipsu-Ipsam, eum ullam.</p>
                </div>
            </div>
        </div>
    )
}

export default About



