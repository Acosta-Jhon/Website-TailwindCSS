import React from 'react'
import dos from '../assets/images/the-avatar.png';

const Carrousel = () => {
    return (

        <div className="min-h-screen w-screen flex justify-center items-center flex-col-reverse">
            <div className="text-6xl frint-bold content-center font-sans " >
                <img align="right" src={dos} className="w-25 h-25 mr-2 rounded-full" alt="Not Found" />
                <br></br>
                <h1>Hi,I'm Jeff an experienced games
                <br></br>
                 developer with deep interest in moder web
                 <br></br>
                 developer
                 </h1>
                <div>
                </div>
            </div>
        </div>
    )

}

export default Carrousel;