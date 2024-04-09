import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav className={`${styles.nav} navbar navbar-expand-sm`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`${styles.navbar} navbar-nav`}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutSection">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experienceSection">
                Experiences
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
