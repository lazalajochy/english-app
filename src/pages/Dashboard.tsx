import { Head } from "../components/Head"
import { Hero } from "../components/Hero"
import { AddWord } from "../components/AddWord"


export const Dashboard = () => {
    return (
        <div className="dashboard scroll-smooth">
            <Head />
            <Hero/>
            <AddWord/>
            
        </div>
    )
}