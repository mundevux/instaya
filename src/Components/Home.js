import React from "react";
import image1 from "../img/entrega-paquete.jpg";

function Home() {
    return (
        <section className="flex justify-around items-center h-screen -mt-28">
            <form action="" className="">
                <h1 className="text-3xl font-bold text-center my-5">Iniciar Sesión</h1>
                <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="pb-1">Email</label>
                    <input type="email" name="email" id="email" placeholder="ejemplo@ejemplo.com" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="password" className="pb-1">Password</label>
                    <input type="password" name="password" id="password" placeholder="***********" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                </div>  
                <div className="flex justify-center my-5 ">
                    <button type="submit" className=" bg-burnt-sienna-600 hover:bg-burnt-sienna-500 py-2 px-3 text-nile-blue-50 rounded-lg text-center">Login</button>
                </div>
                <div className="flex justify-around items-center mt-5">
                    <a href="./#" className="mx-3">¿Olvidaste tu contraseña?</a>
                    <a href="./#" className="mx-3">¿No tienes una cuenta?</a>
                </div>
            </form>
            <img src={image1} alt="Entrega de paquete" className="rounded-lg shadow-xl" />
        </section>
    )
}

export default Home;