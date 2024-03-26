const Navbar = () => {
    return (
        <div className="w-full flex justify-between py-4 px-8 bg-white/10 backdrop-blur fixed top-0 items-center">
            <h1 className="poppins-extrabold-italic text-2xl bg-gradient-to-r bg-clip-text text-transparent from-pink-400 to-purple-400">
                Allen.
            </h1>
            <nav className="flex gap-x-12 font-semibold">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#myworks">My Works</a>
            </nav>
        </div>
    )
}

export default Navbar;