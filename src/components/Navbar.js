import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(Prop) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${Prop.mode} bg-${Prop.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {Prop.title || "Title is Here"}
          </a>
          {/* <Link className="navbar-brand" to="/">
            {Prop.title || "Title is Here"}
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {Prop.li1 || "Homies"}
                </a>
                <Link className="nav-link active" aria-current="page" to="/">
                  {Prop.li1 || "Homies"}
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  {Prop.li2 || "About"}
                </a>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  {Prop.li2 || "About"}
                </Link>
              </li>
            </ul> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={Prop.toggleMode}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: Prop.mode === "dark" ? "white" : "black" }}
              >
                Dark Mode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  li1: PropTypes.string,
  li2: PropTypes.string,
};
