import logo from "../assets/logo.png"
import "./Head.css"
import { useDispatch } from "react-redux"
import { setUser } from "../utils/userSlice"
export const Head = () => {
    const dispatch = useDispatch();

    return (
        <section>
            <div className="menu">
                <ul>
                    <li>
                        <img src={logo} className="logo" />
                    </li>
                    <li>
                        <a href="#" onClick={() => {
                            localStorage.removeItem("user");
                            dispatch(setUser(""));
                        }}>Home</a>
                    </li>
                    <li>
                        <a href="#">Add</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}