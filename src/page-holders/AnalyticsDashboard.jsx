import { Link } from 'react-router-dom'
import analyticsDashboardImg from '../assets/analytics-dashboard.avif'
import './HoldCard.css'

function AnalyticsDashboard() {
  return (
    <div className="page-shell">
      <div className="brand">Kenny Le Portfolio</div>

      <div className="page-card">
        <div className="page-hero">
          <img
            src={analyticsDashboardImg}
            alt="Analytics Dashboard coming soon"
          />

          <div className="page-info">
            <span className="tag">Hold Page</span>

            <h1>Analytics Dashboard</h1>

            <p>
              This dashboard concept is on hold. It will show metrics and
              data visualizations with a clear, modern UI for fast insight
              browsing.
            </p>

            <p className="coming">Coming Soon</p>

            <Link className="back-link" to="/">
              Back to Portfolio
            </Link>

            <p className="footer-note">
              Return to the portfolio while the page is being completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard