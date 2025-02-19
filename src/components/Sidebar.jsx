import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
        Smart <span>Hajiri</span>
      </h2>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/admin" activeClassName="active">
          Admin
        </NavLink>
        <NavLink to="/settings" activeClassName="active">
          Settings
        </NavLink>
      </nav>
      <button className="logout">Logout</button>
    </div>
  );
};

export default Sidebar;
