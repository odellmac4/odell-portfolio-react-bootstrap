import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import './Nav.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="me-1">
            <ImportantDevicesOutlinedIcon />
          </span>
          Backend Engineer
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3 active" href="#jumblio">Jumblio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;