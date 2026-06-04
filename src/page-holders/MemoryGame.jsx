import { Link } from 'react-router-dom'
import memoryGameImg from '../assets/memory-game.avif'
import './HoldCard.css'

function MemoryGame() {
  return (
    <div className="page-shell">
      <div className="brand">Kenny Le Portfolio</div>

      <div className="page-card">
        <div className="page-hero">
          <img
            src={memoryGameImg}
            alt="Memory Game coming soon"
          />

          <div className="page-info">
            <span className="tag">Hold Page</span>

            <h1>Memory Game</h1>

            <p>
              This creative experience is under development. It will showcase a
              polished memory matching game with animations, responsive UI,
              and user-friendly play flow.
            </p>

            <p className="coming">Coming Soon</p>

            <Link className="back-link" to="/">
              Back to Portfolio
            </Link>

            <p className="footer-note">
              Return to the main portfolio while the case study is being completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryGame