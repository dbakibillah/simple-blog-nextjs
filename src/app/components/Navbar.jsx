import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const links = (
    <>
      <li className="border border-black rounded-lg text-black">
        <Link href="/">Home</Link>
      </li>
      <li className="border border-black rounded-lg text-black">
        <Link href="/blogs">All Blogs</Link>
      </li>
      <li className="border border-black rounded-lg text-black">
        <Link href={`${user ? "/profile" : "/api/auth/login"}`}>Profile</Link>
      </li>
    </>
  );

  return (
    <section className="bg-gray-100 sticky top-0 z-50 text-black">
      <div className="navbar container mx-auto lg:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="text-xl font-bold border border-black rounded-lg p-2">
            simple-blog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          {user ? (
            <>
              <Link href="/api/auth/logout">
                <button className="btn btn-ghost border border-black">Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/api/auth/login">
                <button className="btn btn-ghost border border-black">Login</button>
              </Link>
              <Link href="/api/auth/register">
                <button className="btn btn-ghost border border-black">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
