import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../component/header/Header'
import InfoCard from '../../component/infocard/InfoCard'
import Sidebar from '../../component/sidebar/Sidebar'
import './Home.css'

export default function Home() {
  return (
    <>
    <Container fluid>
      <Row fluid>
        <Col fluid md={3} xs={3} sm={3} lg={3} className='content'><Sidebar /></Col>
        <Col fluid md={9} xs={9} sm={9} lg={9} className='nav'>
        <Header />
        <InfoCard />
        </Col>
      </Row>
    </Container>
    </>
  )
}

