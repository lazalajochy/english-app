import { useDispatch } from "react-redux"
import { setUser } from "../utils/userSlice"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Head = () => {
    const dispatch = useDispatch();
    const [nav, setNav] = useState(true);
    const handleNav = () => setNav(!nav);

    return (
        <div className="flex items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
            <a href="#" className="text-3xl text-gray-600 font-bold uppercase">Learning English</a>

            <div className="flex-1 flex justify-center">
                <ul className="hidden md:flex text-gray-600 font-bold">
                    <li className="p-2 uppercase">
                        <a href="#Addword">Add word</a>
                    </li>
                    <li className="p-2 uppercase">
                        <Link to="">List word</Link>
                    </li>
                    <li className="p-2 uppercase">
                        <Link to="">Resources</Link>
                    </li>
                </ul>
            </div>

            <div className="hidden md:flex">
                <Link
                    to="#"
                    onClick={() => {
                        localStorage.removeItem("user");
                        dispatch(setUser(""));
                    }}
                    className="p-2 uppercase font-bold text-gray-600"
                >
                    Logout
                </Link>
            </div>

            <div onClick={handleNav} className="block md:hidden ml-auto">
                { !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? "bg-white fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl text-gray-600 font-bold m-4">Learning English</h1>
                <ul className="pt-24 p-4">
                    <li className="p-4 border-b border-b-gray-600 uppercase">
                        <Link to="">Add word</Link>
                    </li>
                    <li className="p-4 border-b border-b-gray-600 uppercase">
                        <Link to="">List word</Link>
                    </li>
                    <li className="p-4 border-b border-b-gray-600 uppercase">
                        <Link to="">Resources</Link>
                    </li>
                    <li className="p-4 border-b border-b-gray-600 uppercase">
                        <Link
                            to="#"
                            onClick={() => {
                                localStorage.removeItem("user");
                                dispatch(setUser(""));
                            }}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
