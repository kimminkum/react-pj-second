import { Link } from "react-router-dom";
import "../css/Header.css";

// import imgLogo from "../image/logo.png";

interface HeaderProps {
  windowWidth: number;
  isNavToggle: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ windowWidth, onToggle }) => {
  return (
    <div>
      <div className="flex_sb topbar">
        {/* Logo */}
        <Link to="/">
          <div>{/* <img src={imgLogo} alt="" /> */}</div>
        </Link>

        <div>
          {/* pc */}
          {windowWidth > 1024 && (
            <div className="flex_end">
              <ul className="pc_nav">
                <li>
                  <Link to="/about/company">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/business/hmcfb">BUSINESS</Link>
                </li>
                <li>
                  <Link to="/pr">PR</Link>
                </li>
                <li>
                  <Link to="/careers/hmctalent">CAREERS</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          )}

          {/* mobile */}
          {windowWidth < 1023 && (
            <div className="icons_box" onClick={onToggle}>
              ★
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
