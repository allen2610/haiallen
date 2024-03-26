const Navbar = () => {
    return (
        <div className="w-full flex justify-between py-4 px-8 bg-[#F5EEE6] items-center">
            <h1 className="font-extrabold">
                Allen.
            </h1>
            <nav className="flex gap-x-12">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#myworks">My Works</a>
            </nav>
        </div>
    )
}

export default Navbar;