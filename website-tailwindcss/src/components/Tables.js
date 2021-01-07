import React from 'react'

const Tables = () => {
    return (
<div className="container mx-auto px-5 mt-6 sm:px-12  md:px-20 max-w-screen-xl  overflow-hidden">
            {/* container m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl"*/}
            <section>
                <h2 className="inline-block py-2 px-3 no-underline text-green-300 md:capitalize uppercase md:text-base text-xl mt-20 md:m-auto">Blogs  Recientes</h2>
                <ul className="mt-3 divide-y divide-subtle">
                    <li className="py-3">
                        <a href="http://andyisraell.blogspot.com/">
                            <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end hover:bg-gray-900"><div>
                                <h3 className="text-xl font-semibold  hover:text-green-300 ">Bienvenidos  a conocer cerca de mi blog </h3>
                                <h4 className="font-medium text-tertiary">Informacion resumida </h4></div>
                                <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">01 enero 2021</div>
                            </div>
                        </a>
                    </li>
                    <li className="py-3">
                        <a href="http://andyisraell.blogspot.com/">
                            <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end  hover:bg-gray-900"><div>
                                <h3 className="text-xl font-semibold  hover:text-green-300 ">Segundo tema importante</h3>
                                <h4 className="font-medium text-tertiary">Aspectos de mucha importancia  </h4></div>
                                <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">07 enero 2021</div>
                            </div>
                        </a>
                    </li>
                    <li className="py-3">
                        <a href="http://andyisraell.blogspot.com/">
                            <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end  hover:bg-gray-900"><div>
                                <h3 className="text-xl font-semibold hover:text-green-300 ">Tercer tema importante</h3>
                                <h4 className="font-medium text-tertiary">Breve resumenes de los temas </h4></div>
                                <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">09 enero 2021</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className="inline-block py-2 px-3 no-underline text-green-300 md:capitalize uppercase md:text-base text-xl mt-20 md:m-auto">Proyectos</h2>
                <ul className="mt-3 divide-y divide-subtle">
                    <li className="py-3">
                        <a href="http://andyisraell.blogspot.com/">
                            <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end hover:bg-gray-900"><div>
                                <h3 className="text-xl font-semibold hover:text-green-300 ">Bienvenidos  a mis Proyectos </h3>
                                <h4 className="font-medium text-tertiary">Informacion resumida </h4></div>
                                <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">04 enero 2021</div>
                            </div>
                        </a>
                    </li>
                    <li className="py-3">
                        <a href="http://andyisraell.blogspot.com/">
                            <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end  hover:bg-gray-900"><div>
                                <h3 className="text-xl font-semibold  hover:text-green-300 ">Proyecto numero uno</h3>
                                <h4 className="font-medium text-tertiary">Aspectos de mucha importancia  </h4></div>
                                <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">07 enero 2021</div>
                            </div>
                        </a>
                    </li>
                    <li className="py-3">
                        <a href="http://andyisraell.blogspot.com/">
                            <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end  hover:bg-gray-900"><div>
                                <h3 className="text-xl font-semibold  hover:text-green-300 ">Proyecto numero dos</h3>
                                <h4 className="font-medium text-tertiary">Breve resumenes de los temas </h4></div>
                                <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">08 enero 2021</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Tables;
