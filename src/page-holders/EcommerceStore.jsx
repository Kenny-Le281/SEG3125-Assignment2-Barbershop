import { Link } from 'react-router-dom'
import ecommerceImg from '../assets/e-commerce.jpg'
import './HoldCard.css'

function EcommerceStore() {
  return (
    <div className="page-shell">
      <div className="brand">Kenny Le Portfolio</div>

      <div className="page-card">
        <div className="page-hero">
          <img
            src={ecommerceImg}
            alt="E-commerce Store coming soon"
          />

          <div className="page-info">
            <span className="tag">Hold Page</span>

            <h1>E-commerce Store</h1>

            <p>
              This case study is being prepared. It will highlight a modern
              storefront with product browsing, polished visual hierarchy,
              and a smooth checkout flow.
            </p>

            <p className="coming">Coming Soon</p>

            <Link className="back-link" to="/">
              Back to Portfolio
            </Link>

            <p className="footer-note">
              Visit the portfolio homepage while this project is finalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcommerceStore