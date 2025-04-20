import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom";
import { IUserToken } from "../interface/interfaces"


export const Home = () => {
    const navigate = useNavigate();

    const handleToken = async (token: string) => {
        const userToken = jwtDecode<IUserToken>(token);
        const user = {
            sub: userToken?.sub,
            email: userToken?.email,
            given_name: userToken?.given_name,
            picture: userToken?.picture,
            family_name: userToken?.family_name,
        }
        await login(user);
    };

    const login = async (userData: IUserToken) => {
        localStorage.setItem("user", JSON.stringify(userData));
        if(localStorage.getItem("user")){
            navigate("/dashboard")
        }
    }

    return (
        <div className="home">
            <div>
                <h2>Login with Google</h2>
                <GoogleLogin
                    onSuccess={(response) => handleToken(response.credential as string)}
                    onError={() => console.log("Error")}
                />
            </div>

        </div>
    )
}