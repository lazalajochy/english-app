import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom";
import { IUserToken } from "../interface/interfaces"
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import request from "../utils/request";

export const Home = () => {
    const navigate = useNavigate(),
        dispatch = useDispatch();

    const handleToken = async (token: string) => {
        const userToken = jwtDecode<IUserToken>(token);
        const user = {
            sub: userToken?.sub,
            email: userToken?.email,
            given_name: userToken?.given_name,
            picture: userToken?.picture,
            family_name: userToken?.family_name,
        }

        try {
            await request<IUserToken>("POST", "api/user", {
                given_name: user.given_name,
                email: user.email,
            });

            await login(user);
        } catch (error: any) {
            console.error("Unexpected error:", error);
        }
    };

    const login = async (userData: IUserToken) => {

        dispatch(setUser(JSON.stringify(userData)));
        navigate("/dashboard");
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="px-10 py-5 items-center justify-center">Login with Google</h2>
                <GoogleLogin
                    onSuccess={(response) => handleToken(response.credential as string)}
                    onError={() => console.log("Error")}
                />

        </div>
    )
}