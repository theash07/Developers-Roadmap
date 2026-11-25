import { NavLink } from 'react-router-dom'
import { IoArrowForward, IoLayersOutline, IoPlayOutline } from 'react-icons/io5'
import image1 from '/images/back.jpg'
import logo from '/images/roadmap.png'
import '../App.css'

export default function Body() {
  return (
    <main className="new-landing">
      <img className="new-landing-bg" src={image1} alt="" />
      <div className="new-landing-shade" />

      <nav className="landing-nav" aria-label="Main navigation">
        <NavLink className="landing-brand" to="/" aria-label="The Roadmap home">
          <span className="brand-icon"><img src={logo} alt="" /></span>
          <span>The Roadmap</span>
        </NavLink>
        <div className="landing-links">
          <NavLink to="/Navbar/Contact">Feedback</NavLink>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="hero-copy">
          <span className="hero-kicker"><i /> YOUR CAREER, CLEARLY PLANNED</span>
          <h1>Find your path.<br /><em>Build your future.</em></h1>
          <p>Discover practical, structured roadmaps and move from beginner to ready—with every step mapped out.</p>

          <div className="hero-actions">
            <NavLink className="primary-action" to="/Navbar">
              Explore roadmaps <IoArrowForward />
            </NavLink>
            <NavLink className="watch-action" to="/Navbar/About">
              <span><IoPlayOutline /></span> How it works
            </NavLink>
          </div>

          <div className="hero-stats">
            <div><strong>12+</strong><span>Career paths</span></div>
            <div><strong>90+</strong><span>Learning topics</span></div>
            <div><strong>Free</strong><span>Always accessible</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Learning roadmap preview">
          <div className="visual-glow" />
          <div className="roadmap-window">
            <div className="window-bar">
              <div><i /><i /><i /></div>
              <span>My roadmap</span>
              <b><IoLayersOutline /></b>
            </div>
            <div className="roadmap-board">
              <div className="board-heading">
                <div>
                  <small>Learning path</small>
                  <strong>Frontend Developer</strong>
                </div>
                <span>68%</span>
              </div>
              <div className="progress-track"><i /></div>
              <div className="skill-list">
                <div className="skill-card completed">
                  <span>01</span>
                  <div><strong>HTML & CSS</strong><small>Completed</small></div>
                  <b>✓</b>
                </div>
                <div className="skill-card active">
                  <span>02</span>
                  <div><strong>JavaScript</strong><small>In progress</small></div>
                  <b>→</b>
                </div>
                <div className="skill-card">
                  <span>03</span>
                  <div><strong>React</strong><small>Next step</small></div>
                  <b>→</b>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-note note-top">
            <span>3</span>
            <div><strong>Weekly goal</strong><small>Keep it going!</small></div>
          </div>
          <div className="floating-note note-bottom">
            <span>✓</span>
            <div><strong>Progress saved</strong><small>Just now</small></div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <span><i /> Learn</span>
        <span><i /> Practice</span>
        <span><i /> Build</span>
        <span><i /> Grow</span>
      </footer>
    </main>
  )
}
