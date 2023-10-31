import React from 'react'
import { AiFillInstagram, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'

const Footer = () => {
    return (
        <div className='w-full h-auto mx-auto bg-gradient-to-r from-black  to-stone-800 text-white py-5'>
            <div className=' max-w-screen-md justify-center items-center mx-auto'>
                <p className='text-center text-lg'>Information</p>
                <div className='text-center grid grid-cols-2 justify-center items-center mx-auto'>
                    <div>
                        <a href='https://www.linkedin.com/in/fahmi-aziz-463640272/' target='_blank' className='flex items-center justify-center px-2 text-lg'><AiOutlineLinkedin /> Fahmi Aziz</a>
                        <a href='https://www.instagram.com/fahmii.azz/' target='_blank' className='flex items-center justify-center px-2 text-lg'><AiFillInstagram /> fahmii.azz</a>
                    </div>
                    <div>
                        <a href='https://github.com/fahmiAzizz' target='_blank' className='flex items-center justify-center px-2 text-lg'><AiFillGithub /> fahmiAzizz</a>
                        <a className='flex items-center justify-center px-2 text-lg'><ImLocation /> X-xX-3289274jsj</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer