import { NavLink } from "react-router-dom";

import { GoHome } from "react-icons/go";
import { useContext, useEffect, useRef } from "react";
import { StateHandlerContext } from "../../context/screenContext";

export const NavBar = () => {
    const { isSideBarOpen, setIsSideBarOpen} = useContext(StateHandlerContext)

    const navRef = useRef()

    const navLinkClickHandler = () => {
        setIsSideBarOpen(false)
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!navRef?.current?.contains(e?.target)) {
                setIsSideBarOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick, true)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={isSideBarOpen
            ?
            'duration-[0.75s] md:ml-0 md:fixed md:bg-black/10 md:h-screen md:w-screen z-20 top-0'
            :
            'md:-ml-[500%] duration-[2s] md:fixed md:bg-black/10 md:h-screen md:w-screen z-20 top-0'
        }>
            <div
                className="
                    h-screen fixed top-0 gap-3 bg-white text-[#1C4980] border w-44
                    md:z-10 md:w-[19.6875rem] md:pt-10 md:px-5 md:pb-3 md:bg-[#F2F8FE] md:shadow-[rgba(0,_0,_0,_.3)0_0_50px] md:space-y-1
                    sm:w-[16rem]
                    "
                ref={navRef}>

                <NavLink className={({ isActive }) => `flex items-center gap-1 border px-2 py-1 rounded-md cursor-pointer md:mt-6 w-36 mt-2 ml-2 ${isActive && 'bg-black text-white'}`} onClick={() => navLinkClickHandler()} to='/'>
                    <GoHome /> Home
                </NavLink>

            </div>
        </div>
    )
}
