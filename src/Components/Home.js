import React from "react";
import image1 from "../img/entrega-paquete.jpg";
import Logo from '../img/Logo_InstaYa.png';

function Home() {
    return (
        <section className="flex justify-around items-center h-screen lg:container lg:mx-auto">
            <div className="mx-5">
                <img src={Logo} alt="Logo InstaYa" className="h-36 mx-auto"/>
                <form action="" className="">
                    <h1 className="text-3xl font-bold text-center my-5 text-nile-blue-900">Hello Again!</h1>
                    <p className="text-center mb-5 text-nile-blue-600">Enter your email to get started</p>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email" className="pb-1 text-nile-blue-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="ejemplo@ejemplo.com" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="password" className="pb-1 text-nile-blue-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="***********" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>  
                    <div className="flex justify-center my-5 ">
                        <button type="submit" className="w-full bg-burnt-sienna-600 hover:bg-burnt-sienna-500 py-2 px-3 text-nile-blue-50 rounded-lg text-center">Login</button>
                    </div>
                    <div className="flex justify-around items-center mt-5">
                        <a href="./#" className="mx-3 text-center text-xs md:text-base text-burnt-sienna-500">Forgot your password?</a>
                        <a href="./#" className="mx-3 text-center text-xs md:text-base text-burnt-sienna-500">Don't have an account?</a>
                    </div>
                </form>
            </div>
            <img src={image1} alt="Entrega de paquete" className="hidden lg:block rounded-lg shadow-xl lg:w-2/4 xl:w-3/5 " />
        </section>
    )
}

export default Home;