import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="wrapper">
        <div className="logo">
          <h1>SK</h1>
          {/* <img src="" alt="Syde Kicks" /> */}
        </div>
        <form action="" className="searchBar">
          <fieldset>
            <label htmlFor="searchBar" className="sr-only">
              Search for products
            </label>
            <input type="text" id="searchBar" />
            <button className="searchBtn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </fieldset>
        </form>
        <ul className="searchIcons">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBagShopping} />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;