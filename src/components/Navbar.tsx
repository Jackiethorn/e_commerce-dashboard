import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

type NavbarProps = {
    onSidebarToggle: () => void;
};

export const Navbar = ({ onSidebarToggle }: NavbarProps) => {

    return (
        <nav>
            <div className="xl:mt-5 xl:block flex mt-4 xl:shadow-none shadow-lg xl:py-0 py-5">
                <div className="nav-search flex xl:relative gap-2">
                    <RxHamburgerMenu className="xl:hidden w-7 h-7 self-center ml-3" onClick={onSidebarToggle} />
                    <IoIosSearch className="xl:self-center w-7 h-7 xl:absolute xl:left-5" />
                    <input className="w-full basis-full py-4 focus:outline-none shadow-lg rounded pl-14 hidden xl:block" type="search" name="search" id="search" placeholder="Search(Ctrl+/)" />
                </div>
                <div className="nav-items flex gap-3 absolute xl:top-8 xl:right-7 top-13 right-7">
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