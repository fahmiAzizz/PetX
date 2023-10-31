import React, { useState, useEffect } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import 'pure-react-carousel/dist/react-carousel.es.css'
import dog1 from '../assets/dog1.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog4 from '../assets/dog4.png'
import dog5 from '../assets/dog5.png'


const Carousel = () => {

    const carouselList = [
        {
            id: 0,
            gambar: dog1,
            nama: "anjing"
        },
        {
            id: 1,
            gambar: dog2,
            nama: "anjing"
        },
        {
            id: 2,
            gambar: dog3,
            nama: "anjing"
        },
        {
            id: 3,
            gambar: dog4,
            nama: "anjing"
        },
        {
            id: 4,
            gambar: dog5,
            nama: "anjing"
        },
    ]

    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleSlides(1);
            } else if (window.innerWidth < 1024) {
                setVisibleSlides(2);
            } else {
                setVisibleSlides(3);
            }
        };

        // Inisialisasi
        handleResize();

        // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
        window.addEventListener('resize', handleResize);

        // Pastikan untuk membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className=' max-w-screen-md px-5 mx-auto '>
            <div className=''>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={150}
                    totalSlides={5}
                    visibleSlides={visibleSlides}
                    className='  mx-auto'
                >
                    <div className='mx-auto text-center'>
                        <Slider className=''>
                            {carouselList.map((carousel) => (
                                <Slide index={carousel.id} key={carousel.id}>
                                    <div className='mx-auto w-56 h-72 bg-white p-2 shadow-md rounded-lg'>
                                        <img src={carousel.gambar} className=' h-2/3 mx-auto' alt="" />
                                        <p className='text-center p-2'>{carousel.nama}</p>
                                        <div className='mx-auto text-center'> <button className='mx-auto py-1 px-5 rounded-2xl bg-white border-2 border-yellow-400 hover:bg-yellow-400'>Info</button></div>
                                    </div>
                                </Slide>
                            ))}
                        </Slider>
                        <ButtonBack className='absolute left-5 lg:left-36 bottom-1/2'><FiArrowLeftCircle size={30} /></ButtonBack>
                        <ButtonNext className='absolute right-5 lg:right-36 top-[45%]'><FiArrowRightCircle size={30} /></ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Carousel