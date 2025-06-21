import { ReactTyped } from "react-typed"

export const Hero = () => {
    return (
        <div className="text-gray-500">
            <div className="max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-gray-600 font-bold p-2">EMPOWER YOUR FUTURE WITH ENGLISH</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">MASTER ENGLISH, UNLOCK OPPORTUNITIES</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Achieve fluency in </p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={["Speaking", "Listening", "Writing"]}
                        typeSpeed={120}
                        backSpeed={120}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                    Boost your confidence, expand your career, and connect with the world through English.
                </p>
                <a href="#Addword" className="bg-[#00df9a] w-[200px] rounded-full  my-6 mx-auto py-3 text-gray-600 font-bold">Get Started</a>
            </div>
        </div>
    )
}
