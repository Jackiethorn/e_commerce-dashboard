import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-container mt-5">
                <div className="nav-search flex ml-5 relative">
                    <IoIosSearch className="self-center w-7 h-7 absolute left-5" />
                    <input className="w-full basis-full py-4 focus:outline-none shadow-lg rounded pl-14" type="search" name="search" id="search" placeholder="Search(Ctrl+/)" />
                </div>
                <div className="nav-items flex gap-3 absolute top-8 right-7 @container/navlist">
                    <ul className="flex gap-3">
                        <li>
                            <Link to="/"><MdOutlineWbSunny className="w-7 h-7" /></Link>
                        </li>
                        <li>
                            <Link to="/"><TbLayoutGridAdd className="w-7 h-7" /></Link>
                        </li>
                        <li>
                            <Link to="/"><RxAvatar className="w-7 h-7" /></Link>
                        </li>
                        <li>
                            <Link to="/"><FaRegBell className="w-7 h-7" /></Link>
                        </li>
                        <li>
                            <Link to="/"><LuMessageCircle className="w-7 h-7" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};