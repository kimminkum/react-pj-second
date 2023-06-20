import { Link } from "react-router-dom";

interface HistoryProps {
  isNavToggle: boolean;
  onToggle: () => void;
}

const Nav: React.FC<HistoryProps> = ({ onToggle }) => {
  return (
    <div>
      <ul className="navList">
        <li>
          <Link to="/" onClick={onToggle}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about/company" onClick={onToggle}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/business/hmcfb" onClick={onToggle}>
            BUSINESS
          </Link>
        </li>
        <li>
          <Link to="/pr" onClick={onToggle}>
            PR
          </Link>
        </li>
        <li>
          <Link to="/careers" onClick={onToggle}>
            CAREERS
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onToggle}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
