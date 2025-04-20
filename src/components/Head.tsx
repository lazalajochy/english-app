import logo from "../assets/logo.png"
import "./Head.css"

export const Head = () => {
    return (
        <section>
            <div className="menu">
                <ul>
                    <li>
                        <img src={logo} className="logo" />
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Add</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}