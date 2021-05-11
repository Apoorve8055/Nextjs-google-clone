import { BookOpenIcon, CreditCardIcon, DotsVerticalIcon, MapIcon, MicrophoneIcon, MoonIcon, NewspaperIcon, PaperAirplaneIcon, PhotographIcon, PlayIcon, SearchIcon, ShoppingBagIcon, SunIcon, ViewGridIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import {useRouter} from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header({search}) {

    const router = useRouter();
  
    const searchInputRef = useRef(null);

    const [isMounted, setIsMounted] = useState(false);

    const { theme, setTheme } = useTheme("light");
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const switchTheme = async () => {
      if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
      }
    };
  
  const ToggleIcons = () => theme === "dark" ? <MoonIcon className="h-7"/>: <SunIcon className="h-7 text-yellow-600"/>;
  
  const Search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
  };

    return (

    <header className="grid grid-row-2">
    { 
        search ? 
        <>
         <div className="grid p-3 grid-cols-1 md:grid-cols-6 grid-flow-row-dense items-center">
                    <div className="flex p-3 justify-start sm:justify-center  w-full ">
                    <img
                    loading="lazy"
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    className="h-9 cursor-pointer translation duration-150 transform hover:scale-110"
                    alt="Google Icon"
                    onClick={()=>router.push("/")}
                />
                </div>

                <div className={`   
                    flex      
                        col-span-2 
                        md:col-span-3 
                        y-50 mt-3 pt-3 pb-2 ml-3 mr-3  pr-6 pl-6 
                        rounded-full 
                        border-2 
                        border-[#dfe1e5] 
                        hover:shadow-lg 
                        focus-within:shadow-lg 
                        max-w-auto
                        dark:bg-[#f8f9fa]


                        `}>
                <input ref={searchInputRef} type="text" className={`flex-grow focus:outline-none dark:text-gray-800 dark:bg-[#f8f9fa]`}/>
                <MicrophoneIcon className="h-5 pl-2  "/> 
                <SearchIcon onClick={(e)=>Search(e)} className="h-5 pl-5 pr-2 text-gray-500"/>    
                </div>

                <div className="flex p-3 space-x-4 items-center ml-auto                     md:col-span-2">

                <button className="flex space-x-4" onClick={switchTheme}>
                <ToggleIcons/>
                </button>

                <a className="link" href="#">Gmail</a>
                <a className="link" href="#">Images</a>

                <ViewGridIcon className="h-8 p-1 cursor-pointer translation duration-150 transform hover:scale-110"/>  
                <Avatar url="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" />
                </div>
                    </div>

                <div className="grid p-3 grid-cols-1 md:grid-cols-6 grid-flow-row-dense items-center ">
                    <div className=""></div>
                    <div className="flex space-x-6 overflow-scroll sm:overflow-hidden md:col-span-3 ">
                    
                    <HeaderOptions title="All" Icon={SearchIcon} selected/>
                    <HeaderOptions title="Videos" Icon={PlayIcon} />
                    <HeaderOptions title="News" Icon={NewspaperIcon} />
                    <HeaderOptions title="Images" Icon={PhotographIcon} />
                    <HeaderOptions title="Shopping" Icon={ShoppingBagIcon} />
                    <HeaderOptions title="Maps" Icon={MapIcon} />
                    <HeaderOptions title="Bookings" Icon={BookOpenIcon} />
                    <HeaderOptions title="Flights" Icon={PaperAirplaneIcon} />
                    <HeaderOptions title="Finace" Icon={CreditCardIcon} />
                    <HeaderOptions title="More" Icon={DotsVerticalIcon} />
                    
                    </div>
                    <div className="md:col-span-2"></div>
                </div>
                <hr/>
        </>
        :
        <div className="flex ">
            <div className="flex p-3 space-x-4 items-center ml-auto md:col-span-2">
            <button className="flex space-x-4" onClick={switchTheme}>
                <ToggleIcons/>
            </button>
            <a className="link" href="#">Gmail</a>
            <a className="link" href="#">Images</a>
            <ViewGridIcon className="h-8 p-1 cursor-pointer translation duration-150 transform hover:scale-110"/>  
            <Avatar url="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" />
            </div></div>
        }




        
      </header>
    )
}

export default Header;
