import React from 'react'

const Footer = () => {
    return (
        /* Contenedor del footer */
        <div className="container h-full md:max-w-screen-md lg:max-w-screen-xl m-auto px-5 md:px-20 pb-12 pt-24">
            <div className="container max-w-screen-xl mx-auto pt-16 text-gray-50">
                <h1 className="text-3xl font-semibold text-center text-purple-400"> Ponte al contacto
                <span role="img" aria-label="wave">👋</span>
                </h1>
                <p className="px-4 mt-4 text-center text-secondary">No dudes en enviarme un correo electrónico sobre cualquier tema. ¿Quieres un consejo?</p>
                <p className="px-4 mt-1 text-center text-secondary">También puedes comunicarte conmigo en:
                <a className="font-medium text-accent hover:text-accent hover:underline text-red-600" target="_blank" rel="noopener noreferrer" href="/"> GitHub </a>
                <a className="font-medium text-accent hover:text-accent hover:underline text-red-600" target="_blank" rel="noopener noreferrer" href="/"> Twtter </a>
                <a className="font-medium text-accent hover:text-accent hover:underline text-red-600" target="_blank" rel="noopener noreferrer" href="/"> Instagram </a>
                </p>
            </div>
            <div className="mx-auto pt-10 flex justify-center text-gray-50 ">
                <a className="bg-green-500 px-20 py-2 rounded accent-gradient text-on-accent" target="_blank" rel="noopener noreferrer" href="/">
                    <span className=" text-2xl font-semibold text-on-accent">
                        Enviar saludo
                    </span>
                </a>
            </div>
            <div className="container flex-col justify-between md:space-y-8 mt-6">
                {/* navbar */}
                <nav className="hidden lg:flex flex-row items-center space-x-6 justify-center md:justify-end text-sm" >
                    <a aria-current="page" title="Home" href="/">
                    <span className="font-normal text-base hover:text-accent transition duration-150 text-secondary">Home</span>
                    </a>
                    <a title="Blog" href="/">
                        <span className="font-normal text-base hover:text-accent transition duration-150 text-secondary">Blog</span>
                    </a>
                    <a title="Projects" href="/">
                        <span className="font-normal text-base hover:text-accent transition duration-150 text-secondary">Proyectos</span>
                    </a>
                    <a title="About" href="/">
                        <span className="font-normal text-base hover:text-accent transition duration-150 text-secondary"> Otros</span>
                    </a>
                </nav>
                <div className="flex flex-col-reverse md:flex-row md:justify-between space-y-reverse space-y-8 md:space-y-0">

                    <span className="text-xs tracking-wider self-center md:self-end" aria-label="Copyright">© 2020 Jeff Jadulco. All Rights Reserved.</span>
                <div className="flex flex-row items-center space-x-4 justify-center md:justify-end">
                    <span>
                        <a title="Email"  href="/">
                            <svg aria-hidden="true" className="h-8 w-8 text-secondary hover:text-accent transition duration-100" fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path d="M25 5H5a2.497 2.497 0 00-2.487 2.5l-.013 15C2.5 23.875 3.625 25 5 25h20c1.375 0 2.5-1.125 2.5-2.5v-15C27.5 6.125 26.375 5 25 5zm-.5 5.313l-8.838 5.524c-.4.25-.925.25-1.325 0L5.5 10.314a1.063 1.063 0 111.125-1.8L15 13.75l8.375-5.238a1.062 1.062 0 111.125 1.8z"> </path>
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a title="Nuestro GitHub" href="/">
                            <svg aria-hidden="true" className="h-8 w-8 text-secondary hover:text-accent transition duration-100" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path d="M14.988 2.235C7.743 2.232 1.875 8.098 1.875 15.337c0 5.724 3.67 10.59 8.783 12.378.689.173.583-.317.583-.65v-2.271c-3.975.466-4.137-2.165-4.403-2.605-.54-.92-1.814-1.154-1.433-1.593.906-.466 1.828.117 2.898 1.696.773 1.145 2.282.952 3.047.762a3.695 3.695 0 011.016-1.781c-4.119-.739-5.836-3.253-5.836-6.24 0-1.451.478-2.784 1.415-3.86-.597-1.772.056-3.29.144-3.515 1.702-.152 3.471 1.219 3.61 1.327.966-.26 2.07-.398 3.307-.398 1.242 0 2.35.143 3.325.407.331-.252 1.972-1.43 3.554-1.286.085.226.723 1.708.16 3.457.95 1.078 1.433 2.423 1.433 3.876 0 2.994-1.728 5.51-5.859 6.237a3.733 3.733 0 011.116 2.666v3.296c.024.264 0 .525.44.525 5.188-1.75 8.924-6.65 8.924-12.425 0-7.242-5.872-13.105-13.11-13.105z"></path>
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a title="Nuestro Twitter " href="/">
                        <svg aria-hidden="true" className="h-8 w-8 text-secondary hover:text-accent transition duration-100" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path d="M15 1.875C7.752 1.875 1.875 7.752 1.875 15S7.752 28.125 15 28.125 28.125 22.248 28.125 15 22.248 1.875 15 1.875zm6.308 9.894c.008.137.008.28.008.421 0 4.301-3.275 9.255-9.26 9.255a9.228 9.228 0 01-4.998-1.459c.263.03.515.041.785.041a6.528 6.528 0 004.04-1.388 3.255 3.255 0 01-3.041-2.256c.5.073.952.073 1.468-.059a3.251 3.251 0 01-2.605-3.193v-.041c.43.243.938.392 1.468.413a3.255 3.255 0 01-1.45-2.707c0-.606.158-1.16.442-1.64a9.237 9.237 0 006.709 3.4c-.46-2.211 1.192-4.001 3.179-4.001.937 0 1.781.392 2.376 1.025a6.427 6.427 0 002.065-.782 3.239 3.239 0 01-1.43 1.79 6.438 6.438 0 001.875-.507 6.821 6.821 0 01-1.631 1.688z"></path>
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a title="Nuestro Instagram " href="/">
                        <svg aria-hidden="true" className="h-8 w-8 text-secondary hover:text-accent transition duration-100" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path d="M16 11.834A4.174 4.174 0 0011.834 16 4.174 4.174 0 0016 20.166 4.174 4.174 0 0020.166 16 4.174 4.174 0 0016 11.834zM28.494 16c0-1.725.015-3.434-.081-5.156-.097-2-.554-3.775-2.016-5.238-1.466-1.465-3.238-1.919-5.238-2.015-1.725-.097-3.434-.082-5.156-.082-1.725 0-3.434-.015-5.156.082-2 .096-3.775.553-5.238 2.015-1.465 1.466-1.918 3.238-2.015 5.238-.097 1.725-.081 3.434-.081 5.156 0 1.722-.016 3.434.08 5.156.098 2 .554 3.775 2.016 5.238 1.466 1.465 3.238 1.919 5.238 2.015 1.725.097 3.434.082 5.156.082 1.725 0 3.434.015 5.156-.082 2-.096 3.775-.553 5.238-2.015 1.466-1.466 1.919-3.238 2.016-5.238.1-1.722.08-3.431.08-5.156zM16 22.41A6.4 6.4 0 019.59 16 6.4 6.4 0 0116 9.59 6.4 6.4 0 0122.41 16 6.4 6.4 0 0116 22.41zm6.672-11.585a1.495 1.495 0 01-1.497-1.497c0-.828.669-1.497 1.497-1.497a1.495 1.495 0 011.383 2.07 1.495 1.495 0 01-1.383.924z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

