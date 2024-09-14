import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export function Component() {
    return (
        <nav className=" shadow-red-600 shadow-md sticky bg-black text-white top-0 left-0 right-0 px-9 z-50">
            <div className="container flex  p-3 gap-4 items-center justify-between">
                <div className="logo text-2xl font-bold "><Link to={'/'}><i className="fa-solid fa-video" style={{color: '#b62b2b'}} /> tMovies</Link></div>
                <div className="flex gap-3 flex-wrap justify-between items-center ">
                    <ul className="LINKS flex justify-between gap-5 w-1/5">
                        <li><Link to={'/movies'}>Movies</Link></li>
                        <li><Link to={'/series'}>Series</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
