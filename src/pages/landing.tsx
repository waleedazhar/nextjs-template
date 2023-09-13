import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pb-[1.375rem] px-0 not-italic">

                    <div

                        className="bg-white p-4 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-104"
                    >
                        <div className="grid grid-flow-col gap-1">
                            <div className="pt-1 col-span-1">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V7.5C1 7.89782 1.15804 8.27936 1.43934 8.56066C1.72064 8.84196 2.10218 9 2.5 9H4V12L7 9H10.5C10.8978 9 11.2794 8.84196 11.5607 8.56066C11.842 8.27936 12 7.89782 12 7.5V2.5C12 2.10218 11.842 1.72064 11.5607 1.43934C11.2794 1.15804 10.8978 1 10.5 1Z" stroke="#00B2D6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 13H10L13 16V13H14.5C14.8978 13 15.2794 12.842 15.5607 12.5607C15.842 12.2794 16 11.8978 16 11.5V6.5C16 6.10218 15.842 5.72064 15.5607 5.43934C15.2794 5.15804 14.8978 5 14.5 5H14" stroke="#00B2D6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className=" col-span-11 ">
                                <div className="grid grid-rows-2">
                                    <div className=" row-span-1">
                                        <div className="flex flex-col">
                                            <h2 className="text-gray-800 text-lg text-dark-cerulean font-semibold">
                                                {` Welcome to Aourix!`}
                                            </h2>
                                            <p className="text-sky-900 text-opacity-50 text-sm font-semibold pt-[1.314rem]">
                                                {`Start with our step-by-step guide to level up your workspace from Beginner to Pro. You’ll be able to accomplish task one at a time and learn about Aourix best practices along the way.`}
                                            </p>

                                        </div>
                                    </div>
                                    <div className=" row-span-1">
                                        <div className="flex flex-col sm:flex-col lg:flex-row sapce-x-6 pt-[1.876rem] pb-[0.88rem]">
                                            <div>
                                                <button
                                                    className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-full group w-full button-gradient-bg hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}
                                                    onClick={() => { }}
                                                >
                                                    <span className={` w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 text-sky-900 text-[10px] font-semibold py-[0.32rem] px-[0.62rem] hover:text-white`}>
                                                        {`Get Started`}
                                                    </span>
                                                </button>
                                            </div>
                                            <div>
                                                {/* <ButtonComponent variant="SECONDARY" onClick={() => { }} >{`View Documentaion`}</ButtonComponent> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-[1.375rem] px-0">

                    <div

                        className="bg-white p-4 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104"
                    >
                        <div className="grid grid-flow-col gap-4">
                            <div className="pt-1 col-span-2">

                                <Image
                                    src={'/assets/images/save-for-later-1.svg'}
                                    alt={"save-icon"}
                                    style={{ objectFit: 'contain' }}
                                    width={16}
                                    height={15}

                                />
                            </div>
                            <div className=" col-span-10 ">
                                <div className="grid grid-rows-3">
                                    <div className="row-span-1 ">
                                        <div className="flex flex-col">
                                            <h2 className="text-gray-800 text-lg text-dark-cerulean font-semibold">
                                                {` Connect Data Sources`}
                                            </h2>

                                            <p className="text-gray-500 text-sm text-light-cerulean font-semibold pt-[1.314rem]">
                                                {`Connect your data sources to Aourix. Let all your data be connected to virtually unified. Select from available data types and supported sources.`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row-span-1">
                                        <div className="grid grid-cols-1 px-3 items-center md:grid-cols-4">
                                            <div onClick={() => { }} className="w-[100px] h-[73px] cursor-pointer p-2 m-2 flex items-center justify-center rounded-lg hover:bg-white shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                                <img className="w-full h-full object-contain" src="/assets/icon/Microsoft_Office_Excel.svg" style={{ objectFit: "contain" }} />
                                            </div>
                                            <div title="Coming Soon! " className=" w-[100px] h-[73px] cursor-not-allowed p-2 m-2 flex items-center justify-center rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                                <img className="w-full h-full object-contain" src="/assets/icon/postgresql-ar21.svg" style={{ objectFit: "contain" }} />
                                            </div>
                                            <div title="Coming Soon! " className=" w-[100px] h-[73px] cursor-not-allowed p-2 m-2 flex items-center justify-center rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                                <img className="w-full h-full object-contain" src="/assets/icon/mysql-official.svg" style={{ objectFit: "contain" }} />
                                            </div>
                                            <div title="Coming Soon! " className=" w-[100px] h-[73px] cursor-not-allowed p-2 m-2 flex items-center justify-center rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                                <img className="w-full h-full object-contain" src="/assets/icon/oracle.svg" style={{ objectFit: "contain" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-1">
                                        <div className="flex flex-col sm:flex-col lg:flex-row sapce-x-6 justify-center items-center pt-[1.876rem] pb-[0.88rem]">
                                            <div>
                                                <button
                                                    className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-full group w-full button-gradient-bg hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}
                                                    onClick={() => { }}
                                                >
                                                    <span className={` w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 text-sky-900 text-[10px] font-semibold py-[0.32rem] px-[0.62rem] hover:text-white`}>
                                                        {`Add Source`}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Section */}
                    <div

                        className="bg-white p-4 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104"
                    >
                        <div className="grid grid-flow-col gap-4">
                            <div className="pt-1 col-span-2">
                                {/* <ImageComponent src={'/assets/images/statistics-logo.svg'} height={15} width={16} /> */}
                                <Image
                                    src={'/assets/images/statistics-logo.svg'}
                                    alt={"statistics-icon"}
                                    style={{ objectFit: 'contain' }}
                                    width={16}
                                    height={15}

                                />
                            </div>
                            <div className=" col-span-10 ">
                                <div className="grid grid-rows-3 ">
                                    <div className="row-span-1 ">
                                        <div className="flex flex-col">
                                            <h2 className="text-gray-800 text-lg text-dark-cerulean font-semibold">
                                                {`Connect Analytics Tools`}
                                            </h2>

                                            <p className="text-gray-500 text-sm text-light-cerulean font-semibold pt-[1.314rem]">
                                                {`Add Aourix to your favourite analytics tools to supercharge productivity. The tool will add augmented intelligence to make better decisions. Select from available and supported tools.`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row-span-1">
                                        <div className="grid grid-cols-1 px-3 items-center md:grid-cols-2">
                                            <div className="flex items-center justify-center">
                                                <div title="Coming Soon! " className="w-[100px] h-[73px] cursor-not-allowed p-2 m-2 flex items-center justify-center rounded-lg hover:bg-white shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                                    <img className="w-full h-full object-contain" src="/assets/icon/-Tb8i6__tableau-logo.svg" style={{ objectFit: "contain" }} />
                                                </div>
                                                {/* <ImageComponent src={'/assets/images/tableau-logo.svg'} height={16} width={78} /> */}
                                            </div>
                                            <div className="flex items-center justify-center">

                                                <div title="Coming Soon! " className="w-[100px] h-[73px] cursor-not-allowed p-2 m-2 flex items-center justify-center rounded-lg hover:bg-white shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                                    <img className="w-full h-full object-contain" src="/assets/icon/microsoft_powerbi-ar21.svg" style={{ objectFit: "contain" }} />
                                                </div>
                                                {/* <ImageComponent src={'/assets/images/power-logo.svg'} height={32} width={65} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-span-1">
                                        <div className="grid grid-rows-1">
                                            <div className="flex flex-col sm:flex-col lg:flex-row sapce-x-6 justify-center items-center">
                                                <div>
                                                    <button
                                                        className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-full group w-full button-gradient-bg hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}
                                                        onClick={() => { }}
                                                    >
                                                        <span className={` w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 text-sky-900 text-[10px] font-semibold py-[0.32rem] px-[0.62rem] hover:text-white`}>
                                                            {`Add Source`}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
