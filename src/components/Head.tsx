
import { useDispatch } from "react-redux"
import { setUser } from "../utils/userSlice"
import { MdAdd, MdLogout, MdList, MdLibraryBooks } from "react-icons/md"
import { Link } from "react-router-dom"

export const Head = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-full bg-[#2d4d80] py-10 h-[200px]  ">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-10 h-full">

                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-x-10 gap-y-4">
                    <div className="flex items-center gap-2 transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                        <MdLibraryBooks className="text-white text-2xl transition duration-300 ease-in-out hover:text-gray-300" />
                        <h2 className="text-white font-bold text-2xl hover:text-gray-300 transition duration-300 ease-in-out">Vocabulary</h2>


                    </div>
                    <Link to="/dashboard/listWord" className="flex items-center gap-2  transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                        <MdList className="text-white text-2xl transition duration-300 ease-in-out hover:text-gray-300" />
                        <h2 className="text-white font-bold text-2xl hover:text-gray-300 transition duration-300 ease-in-out">Vocabulary List</h2>

                    </Link>

                    <Link to="/dashboard/addWord" className="flex items-center gap-2 transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                        <MdAdd className="text-white text-2xl hover:text-gray-300" />
                        <h2 className="text-white font-bold text-2xl hover:text-gray-300">Add a word</h2>
                    </Link>
                </div>

                <div className="flex items-center gap-2 transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    <MdLogout className="text-white text-2xl transition duration-300 ease-in-out hover:text-gray-300" />
                    <a
                        href="#" onClick={() => {
                            localStorage.removeItem("user");
                            dispatch(setUser(""));
                        }}
                        className="text-white font-bold  text-2xl hover:text-gray-300 transition duration-300 ease-in-out"
                    >
                        Logout
                    </a>
                </div>

            </div>
        </div>


    )
}