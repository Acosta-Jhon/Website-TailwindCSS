import React from 'react'
import img from '../assets/images/the-avatar.png';

const Carrousel = () => {
    return (
        <div className="grid md:flex space-y-4 p-5 md:p-16 h-96 justify-center items-center mb-32">
            <div className="ml-32 sm:ml-64 block md:hidden">
                <img src={img} className="h-32 w-32 bock md:hidden rounded-full" alt="img" />
            </div>
            <div className="block md:float-left w-full">
                <p className="md:text-4xl text-3xl mt-10">Hi, I’m Jeff. <br /> I’m an experienced game developer with deep interest in modern web development.</p>
            </div>
            <div className="md:float-right  md:w-96 mt-5">
                <img src={img} className="md:w-52 md:h-52 h-32 w-32 hidden md:block rounded-full" alt="img" />
            </div>
        </div>
    )

}

export default Carrousel;