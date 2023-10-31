import React from 'react'
import dog from '../assets/dog5.png'
import '../app.css'

const About = () => {
    return (
        <div className='w-full h-screen mx-auto justify-center items-center' id='about'>
            <div className=' max-w-screen-md grid w-full h-full md:grid-cols-2 justify-center items-center mx-auto'>
                <div>
                    <img src={dog} alt="" className='w-64 mx-auto' />
                </div>
                <div className='m-5 '>
                    <h1 className='text-3xl title-font font-semibold'>About PetX</h1>
                    <p className='text-lg'>"We are a community dedicated to rescuing less fortunate animals and giving them a second chance at a happy life, We strive to provide a positive and responsible adoption experience, as well as support you throughout your journey with your new pet."</p>
                </div>
            </div>
        </div>
    )
}

export default About



