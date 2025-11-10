import './InfoCard.css'
export default function InfoCard() {
  return (
    <>
    <div className="info-container">
      {/* Activity Card */}
      <div className="info-card">
        <h2 className="info-title">Activity</h2>
        <div className="info-content">
          <p> RIMS IC Activities Announced : 40</p>
          <p> RIMS IC Activities Submitted : 10</p>
          <p> RIMS IC Activities Approved : 10</p>
          <hr />
          <p> RIMS IC Activities Announced : 21</p>
          <p> RIMS IC Activities Submitted : 10</p>
          <p> RIMS IC Activities Approved : 10</p>
          <hr />
          <p>Self Activities Announced : 10</p>
          <p>Self Activities Submitted : 1</p>
          <p>Self Activities Approved : 5</p>
        </div>
        <button className="info-btn">More info →</button>
      </div>

      {/* Notification Card */}
      <div className="info-card">
        <h2 className="info-title">Notification</h2>
        <div className="info-content">
          <p>→ RIMS IC Report Submission    Extended</p>
          <p>→ Zone wise Q&A Session Link</p>
          <p>→ RIMS IC Annual Report 24–25</p>
          <p>→ RIMS IC 7.0 Calendar Activity: 24–25</p>
        </div>
        <button className="info-btn">More info →</button>
      </div>

      {/* News Card */}
      <div className="info-card">
        <h2 className="info-title">News</h2>
        <div className="info-content">
          <p>No new updates</p>
        </div>
        <button className="info-btn">More info →</button>
      </div>
    </div>
    </>
  )
}
