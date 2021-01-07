import React from 'react'

const Header = () => {
    return (
        <div className="leading-normal tracking-normal h-40">
            <nav className="flex items-start justify-start md:justify-center md:items-center flex-wrap fixed w-full z-10 top-0 py-12 lg:pl-32 md:pl-32 bg-gray-800 bg-opacity-75">
                <div className="flex px-5">
                    <div className="lg:ml-auto">
                        <a aria-current="page" aria-label="Website logo, go back to homepage." className="" href="/">
                            <svg aria-hidden="true" role="img" className="h-12 sm:h-14 w-14 sm:w-14 fill-current hover:text-accent transition duration-150 hover:text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 530 373"><path d="M307.637 285.072c31.627-38.387 81.471-113.234 86.314-208.168-52.916 10.502-106.705 32.174-156.527 63.866 1.863 9.817 12.854 73.39-3.901 126.722-12.067-46.235-32.049-79.213-42.001-93.702-39.202 31.739-74.552 70.245-103.206 114.852 6.178 26.257 34.812 51.931 71.999 59.845-45.123 3.83-88.857-7.115-127.216-34.21C131.15 116.786 300.265 24.935 486.784-9.521c-36.526 133.853-103.325 234.484-179.147 294.593zM13.373 271.268C-1.682 182.688 58.725 72.512 126.585 30.505c-13.643 22.125-19.636 34.08-28.477 60.978C174.923 21.302 289.322-3.54 386.365-12.123 234.265 29.23 77.778 118.242 13.374 271.269zM487.735 87.666c19.744 82.303 10.79 144.022-19.432 195.124-1.387-26.878-10.634-51.175-10.665-51.257-.007.146-21.579 71.84-82.148 118.436 8.956-20.031 11.304-44.879 11.304-44.879-43.279 21.442-102.288 45.54-166.712 47.429 138.556-52.395 221.66-135.299 267.653-264.853z">
                            </path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="lg:hidden sm:ml-auto ml-auto">
                    <button id="nav-toggle" className="md:hidden right-0 px-5  focus:outline-none"
                        onClick={() => {
                            document.getElementById('nav-toggle').onclick = () => {
                                document.getElementById("nav-content").classList.toggle("hidden");
                            }
                        }}>
                        <svg className="w-8 h-8 hover:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z">
                            </path>
                        </svg>
                    </button>
                </div>

                <div className="w-full flex-grow lg:items-center md:items-center lg:w-auto md:w-auto hidden lg:block md:block lg:pt-0 " id="nav-content">
                    <ul className="list-reset lg:flex md:flex justify-start flex-1 items-center h-screen md:h-auto lg:h-auto float-right md:float-left">
                        <li className="">
                            <a className="inline-block py-2 px-3 no-underline text-green-300 md:capitalize uppercase md:text-base text-xl mt-20 md:m-auto" href="/">Home</a>
                        </li>
                        <li className="mr-0">
                            <a className="inline-block py-5 px-3 no-underline hover:text-green-300 md:capitalize uppercase md:text-base text-xl " href="/">Blog</a>
                        </li>
                        <li className="mr-0">
                            <a className="inline-block py-5 px-3 no-underline hover:text-green-300 md:capitalize uppercase md:text-base text-xl" href="/">Projects</a>
                        </li>
                        <li className="mr-0">
                            <a className="inline-block py-5 px-3 no-underline hover:text-green-300 md:capitalize uppercase md:text-base text-xl" href="/">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;


