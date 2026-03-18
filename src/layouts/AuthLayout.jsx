import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/background.jpg')] bg-cover bg-center p-8"> 

            <div className="bg-gray-900/60 p-8 rouded-xl shadow-xl w-full max-w-md rounded-xl border-gray-600 border-2">

                <Outlet />

            </div>

        </div>
    )
}