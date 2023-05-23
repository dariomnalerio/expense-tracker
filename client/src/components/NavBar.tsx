import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Signup</Link>
          </li>
          <li>
            <Link href={"/profile"}>Edit profile</Link>
          </li>
          <li>
            <Link href={"/logOut"}>logOut</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
