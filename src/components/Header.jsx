import { NavLink } from "react-router";
import { Brain } from 'lucide-react';

function linkClass({ isActive }) {
    return isActive ? "border-b-2 border-red-500" : "text-white hover:text-blue-300"
}

function header () {
    return (
        <header className="bg-gray-900 text-white text-center p-6 text-1xl flex flex-col items-center" >
            <h1 className="mb-6 text-3xl">MyApp <Brain className="size-8 stroke-gray-500 inline" /> </h1>
            <div className="flex flex-row gap-4 font-raleway">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
            </div>
            
        </header>
    )
}

export default header;