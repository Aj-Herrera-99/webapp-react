import { Link, NavLink } from "react-router-dom";

function HeaderComp() {
    return (
        <header className="px-6 text-white min-h-[13vh] gap-12 flex items-center bg-gradient-to-r from-blue-800 to-blue-400">
            <Link to={"/"} className="text-2xl uppercase md:text-4xl">
                some title
            </Link>
            <Navbar />
        </header>
    );
}

const appLinks = [
    { to: "/", label: "home" },
    { to: "/ciao", label: "altro" },
];

function Navbar() {
    const navLinkClasses =
        "py-1 px-3 capitalize text md:text-xl hover:opacity-100";
    return (
        <nav className="flex gap-3">
            {appLinks.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.to}
                    className={({ isActive }) =>
                        navLinkClasses +
                        (isActive
                            ? " text-white border-b border-white"
                            : " opacity-60")
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default HeaderComp;
