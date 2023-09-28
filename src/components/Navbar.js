import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Border from "../assets/Border.png";
import NeonClip from "../assets/NeonClip.png";

const Navbar = () => {
  return (
    <header
      className="Header container-fluid py-3 position-absolute top-0 start-0"
      style={{ zIndex: "999" }}
    >
      <ul className="list-group d-flex flex-row flex-lg-nowrap flex-wrap align-items-center justify-content-lg-end justify-content-center w-100 position-relative">
        <li className="list-group-item border-0 nav-item p-0 mx-3 bg-transparent position-relative">
          <Link href="/" className="nav-link text-uppercase px-0 py-3">
            HOME
          </Link>
          <img
            src={NeonClip || ""}
            alt=""
            className="MenuNeonClip d-lg-block d-none position-absolute top-0 start-0"
          />
        </li>
        <li className="list-group-item border-0 nav-item p-0 mx-3 bg-transparent">
          <Link href="/" className="nav-link text-uppercase px-0 py-3">
            ROADMAP
          </Link>
        </li>
        <li className="list-group-item border-0 nav-item p-0 mx-3 bg-transparent">
          <Link href="/" className="nav-link text-uppercase px-0 py-3">
            WHITEPAPER
          </Link>
        </li>
        <li className="list-group-item border-0 nav-item p-0 mx-3 bg-transparent">
          <Link href="/" className="nav-link text-uppercase px-0 py-3">
            AMBASODORS
          </Link>
        </li>
        <li className="list-group-item border-0 button position-relative p-0 bg-transparent">
          <img
            src={Border || ""}
            className="ClipImage position-absolute translate-middle-100"
          />
          <Link href="/" className="nav-link text-uppercase px-5 py-3">
            PLAY GAME
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
