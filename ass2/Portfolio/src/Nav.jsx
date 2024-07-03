import React from "react";

function Nav() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <title>Document</title>
      <link rel="stylesheet" href="../Home.css" />
      <nav className="navbar navbar-expand-lg" data-bs-theame="dark">
        <div className="container-fluid">
          <h1 className="navbar-brand nav" style={{ color: "white" }}>
            Portfolio
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link nav2"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav2"
                  style={{ color: "white" }}
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link nav2"
                  style={{ color: "white" }}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
