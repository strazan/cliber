import Link from "next/link";
import { mainContent, colors } from "./variables";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="mainContent">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/news">
            <li>News</li>
          </Link>
          <Link href="/">
            <li>Gear</li>
          </Link>
          <Link href="/">
            <li>Forum</li>
          </Link>
        </ul>
      </nav>
      <style jsx>{`
        .navbar {
          font-family: beastly, sans-serif;
          font-weight: 400;
          font-style: normal;
          background-color: #fff;
        }
        .navbar nav {
          ${mainContent}
        }
        .navbar ul {
          display: flex;
          list-style: none;
        }

        .navbar ul li {
          text-decoration: none;
          color: ${colors.primary};
          font-size: 1.5rem;
          margin-left: 1rem;
          padding: 1rem 0;
          cursor: pointer;
        }
        .navbar ul li:hover {
          color: ${colors.secondary};
        }

        .navbar ul li:first-child {
          margin-left: 0;
        }
        .navbar ul li:nth-child(2) {
          margin-left: auto;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
