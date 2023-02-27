import { RxGithubLogo } from "react-icons/rx";
import { Link } from "@remix-run/react";
const Footer = (): JSX.Element => {
  return (
    <footer>
      <ul>
        <Link to="*">
          <RxGithubLogo />
        </Link>
      </ul>
      <ul>
        <Link to="*">
          <RxGithubLogo />
        </Link>
      </ul>{" "}
      <ul>
        <Link to="*">
          <RxGithubLogo />
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
