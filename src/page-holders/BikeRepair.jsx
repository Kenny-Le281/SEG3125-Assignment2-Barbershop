import { Link } from 'react-router-dom'
import bikeRepairImg from '../assets/bike-repair-service.jpg'
import './HoldCard.css'

function BikeRepair() {
  return (
    <div className="page-shell">
      <div className="brand">Kenny Le Portfolio</div>

      <div className="page-card">
        <div className="page-hero">
          <img
            src={bikeRepairImg}
            alt="Bike Repair Shop coming soon"
          />

          <div className="page-info">
            <span className="tag">Hold Page</span>

            <h1>Bike Repair Shop</h1>

            <p>
              This project is currently in progress. It will become a polished
              bike repair appointment experience with service selection,
              booking, and storefront details.
            </p>

            <p className="coming">Coming Soon</p>

            <Link className="back-link" to="/">
              Back to Portfolio
            </Link>

            <p className="footer-note">
              Check back later for the finished case study and interactive design preview.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeRepair