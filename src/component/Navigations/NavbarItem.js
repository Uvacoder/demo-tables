import React from "react";

const NavbarItem = () => {
  return (
    <div style={{ position: "fixed", top: "0", zIndex: "1000", width: "100%" }}>
      <nav className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#!">
          Tablify
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">Welcome Marc Burges</li>
        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/login">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarItem;
