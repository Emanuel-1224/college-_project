import { Container, Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import './Navbar.css';

export default function Navbar() {
  return (
    <>
    <Container>
        <Row>
                <header className="header">
                  {/* Left Section */}
                  <div className="header-left">
                    <div className="logo-section">
                      <img src="https://tse1.mm.bing.net/th/id/OIP.K06vL4mRvHImyTCIgNNuVQAAAA?pid=Api&P=0&h=180" alt="Logo" className="logo" />
                      
                    </div>
                    <div className="iic-info">
                      <span className="iic-label">IIC ID</span>
                      <span className="iic-id">IC25486578</span>
                    </div>
                  </div>
            
                  {/* Center Section */}
                  <div className="header-center">
                    <h1 className="center-title">RIMS INCUBATION CENTER</h1>
                  </div>
            
                  {/* Right Section */}
                  <div className="header-right">
                    <div className="rating-box">
                      <span className="rating-text">Star rating (AY 2023-24)</span>
                      <div className="stars">
                        {[...Array(4)].map((_, i) => (
                          <FaStar key={i} className="star-icon" />
                        ))}
                      </div>
                    </div>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?pid=Api&P=0&h=180" alt="Profile" className="profile-pic" />
                  </div>
            
                  {/* Bottom Yellow Bar */}
                  <div className="header-bottom">
                    <span>IIC REGIONAL MEET 2025.</span>
                  </div>
                  <Navbar>

                  </Navbar>
                </header>
                

        </Row>
    </Container>
    </>
  );
}
