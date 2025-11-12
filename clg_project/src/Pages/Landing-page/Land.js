import './Land.css';

export default function Land() {
  return (
    <>
    <div className="landing-container">
      {/* Header */}
      <header className="header1">
        <div className="logo">C3</div>
        <nav className="nav-links">
          <a>About</a>
          <a>Solutions</a>
          <a>Ecosystem</a>
          <a>Training Programs</a>
          <a>Activities</a>
          <a>Careers</a>
        </nav>
        <button className="signin-btn">Sign in</button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="left-section">
          <div className="tag">• Innovate • Defend • Secure •</div>
          <h1 className="title">C3iHub</h1>
          <p className="subtitle">Cybersecurity and Cybersecurity of Cyber-physical Systems</p>
          <p className="description">
            A Technology Innovation Hub at <span className="highlight">IIT Kanpur</span>
          </p>
          <div className="upgrade-box">
            ⭐ Now Upgraded to Technology Translation Research Park (TTRP) by DST
          </div>
          <div className="logos">
            <div className="logo1">Logo 1</div>
            <div className="logo2">Department of Science & Technology</div>
          </div>
        </section>

        <section className="right-section">
          <div className="central-bubble">
            <svg viewBox="0 0 24 24" className="shield-icon">
              <path fill="#fff" d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z" opacity="0.08" />
              <path fill="#ff7a18" d="M12 2.5l7 3.1v5.6c0 4.5-3.4 8.8-7 10-3.6-1.2-7-5.5-7-10V5.6l7-3.1z" />
              <path fill="#fff" d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <div className="badge b1">SECURE</div>
          <div className="badge b2">INNOVATE</div>
          <div className="badge b3">DEFEND</div>

          <div className="dot d1"></div>
          <div className="dot d2"></div>
          <div className="dot d3"></div>
          <div className="dot d4"></div>
          <div className="dot d5"></div>
        </section>
      </main>

      <button className="request-btn">📞 Request Services</button>
      <div className="footer-gradient"></div>
    </div>
    </>
  );
}