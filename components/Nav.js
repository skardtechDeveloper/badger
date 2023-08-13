import { useAuth } from "@/hooks/auth";
import Link from "next/link";

const Nav = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="flex justify-center items-center bg-indigo-500 w-full">
            <ul className="flex justify-center items-center">
                <li className="mr-5 px-4 py-2">
                    <Link href="/" className="text-white">Home</Link>
                </li>
                <li className="mr-5 px-4 py-2">
                    <Link href="/about" className="text-white">About</Link>
                </li>
            </ul>
            <div className="">
                {!user ?
                    <Link className="text-white  px-4 py-2" href={"/login"}>
                        Sign In
                    </Link>
                    :
                    <Link
                        href="#"
                        className="hover:font-bold text-white  px-4 py-2"
                        onClick={logout}
                    >
                        Sign Out
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Nav;