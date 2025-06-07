import { Head } from "../components/Head"
import { Outlet } from "react-router-dom";


export const Dashboard = () => {
    return (
        <div className="dashboard">
            <Head />
            <div className="p-5">
                <Outlet /> 
            </div>
        </div>
    )
}