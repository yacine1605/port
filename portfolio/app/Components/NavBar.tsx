import { Link } from "@remix-run/react";

const NavBar = (): JSX.Element => {
  return (
    <nav className="w-full bg-red-400 flex flex-row justify-between p-1">
      <Link to="/*">Accuile</Link>
      <Link to="/*">Contact US</Link>
      <Link to="/*">About Me</Link>
    </nav>
  );
};

export default NavBar;
