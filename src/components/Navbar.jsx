import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { throttle } from 'lodash'
import cn from 'clsx'


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const closeSidebar = () => {
        setNav(false);
    }

    const links = [
        {
            id: 1,
            title: 'Home',
            link: '#home'
        },
        {
            id: 2,
            title: 'About Us',
            link: '#about'
        },
        {
            id: 3,
            title: 'Adoption',
            link: '#adoption'
        },
        {
            id: 1,
            title: 'Donation',
            link: '#donation'
        }
    ]

    const [hasScrolled, setHasScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 50
            const scrolled = document.documentElement.scrollTop > offset

            // if (hasScrolled !== scrolled) 
            setHasScrolled(scrolled)
        }, 200)

        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [hasScrolled])
    console.log(hasScrolled);
    return (
        <div
            className={cn(
                'w-full justify-between items-center fixed flex h-20 px-10 md:px-20 text-white text-xl z-10',
                {
                    'bg-black opacity-90': hasScrolled
                }
            )}>
            <div className={cn(
                'text-5xl logo-font ',
                {
                    'text-yellow-400': hasScrolled
                }
            )}>
                PetX
            </div>
            <ul className='hidden md:flex gap-10'>
                {links.map(link => (
                    <a key={link.id} href={link.link} className='hover:text-yellow-400 hover:scale-110 duration-200 title-font font-semibold'>{link.title}</a>
                ))}
            </ul>


            <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 pr-4 md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90'>
                    {links.map(link => (
                        <li key={link.id} onClick={closeSidebar} className='pz-4 cursor-pointer capitalize py-6 text-3xl'><a href={link.link}>{link.title}</a></li>
                    ))}
                </ul>
            )}

        </div>




    )
}

export default Navbar