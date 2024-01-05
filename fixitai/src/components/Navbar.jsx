
const img1 = "https://www.fix-it.ai/_next/static/media/fixit_white_bg.3734d2d4.svg"


import { useAuth0 } from "@auth0/auth0-react";




function Navbar() {
    const { user ,  isAuthenticated ,loginWithRedirect , logout} = useAuth0();


    return (
        <nav className="flex justify-between  items-center w-full h-20 text-white bg-[#212520]  fixed z-10">
            <div className="flex items-center  w-95 sm:w-85 mx-10 p-10">
                <a href="/" className="">
                    <div className="flex items-center transition-all ease duration-200 gap-x-2">
                        <img
                            src={img1}
                            alt="fixit"
                            loading="lazy"
                            width="25"
                            height="25"

                            className="w-10 h-10"
                        />
                        <h4 className="text-[2rem] text-white font-semibold">fi<span className="text-[2.5rem]">X</span>it</h4>
                    </div>

                </a>
            </div>
            <div>

                <div className="hidden md:flex text-sm lg:w-80 max-w-80 justify-end items-center gap-x-5 mx-10 p-10">
                    <a className="flex min-w-fit" href="/about">
                        <button className="bg-transparent rounded-sm border px-3 py-1.5 flex min-w-fit font-bold text-white border-transparent">


                            About Us
                        </button>
                    </a>

                    {
                        !isAuthenticated ? (
                            <button className="bg-transparent rounded-sm border px-3 py-1.5 flex min-w-fit font-bold text-white border-transparent"
                            onClick={() => loginWithRedirect()}
                    >
                        Login

                        </button>

                        ):(
                            <button className="bg-transparent rounded-sm border px-3 py-1.5 flex min-w-fit font-bold text-white border-transparent"
                            onClick={() => logout()}
                    >
                        LogOut

                        </button>
                        )
                    }{
                        user && (
                            <div className="flex items-center gap-x-2">
                                <img
                                    src={user.picture}
                                    alt={user.name}
                                    className="rounded-full w-10 h-10"
                                />
                                <h4 className="text-[1rem] text-white font-semibold">{user.name.split(' ')[0]}</h4>
                            </div>
                        )
                    }
                  









                </div>
            </div>

        </nav >
    );
}

export default Navbar;
