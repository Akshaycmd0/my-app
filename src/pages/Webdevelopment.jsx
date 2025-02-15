import React from 'react'
import { Dropdown, Button, Card, Row, Col } from 'react-bootstrap';
import Navbar from '../components/NavBarPage';
import Footer from '../components/FooterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import card8 from "../images/card8.jpg";
import card9 from "../images/card9.jpg";
import card10 from "../images/card10.jpg";
import card11 from "../images/card11.jpg";
import card12 from "../images/card12.jpg";
import card13 from "../images/card13.jpg";
import card14 from "../images/card14.png";
import card15 from "../images/card15.jpg";
import { Link } from "react-router-dom";

const Webdevelopment = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="container">
          {/* Category Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-category">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/cybersecurity">Cyber Security</Dropdown.Item>
            <Dropdown.Item as={Link} to="/webdevelopment">Web Development</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Cards Section */}
          <div className="card-grid mt-4">
            <Row className='my-5'>
              {/* Card 1 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card8} />
                  <Card.Body>
                    <Card.Title>Beginner</Card.Title>
                    <Card.Text>
                      8 Best Webdevelopment Courses For Beginner
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card9} />
                  <Card.Body>
                    <Card.Title>Unlimited Connectivity</Card.Title>
                    <Card.Text>
                      Stay connected with unlimited possibilities in the world of tech.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card10} />
                  <Card.Body>
                    <Card.Title>Innovation at Your Fingertips</Card.Title>
                    <Card.Text>
                      Explore the latest innovations and stay ahead of the curve in tech.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Add more rows if needed */}
            <Row className='my-5'>
              {/* Card 4 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card11} />
                  <Card.Body>
                    <Card.Title>Beginner</Card.Title>
                    <Card.Text>
                      8 Best Webdevelopment Courses For Beginner
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 5 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card12} />
                  <Card.Body>
                    <Card.Title>Web Apps Design</Card.Title>
                    <Card.Text>
                      Build responsive web applications that work seamlessly on any device.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 6 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card13} />
                  <Card.Body>
                    <Card.Title>W D Training & Course</Card.Title>
                    <Card.Text>
                      Web Development Treaining & Certification Course
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className='my-5'>
              {/* Card 7 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card14} />
                  <Card.Body>
                    <Card.Title>Career Course</Card.Title>
                    <Card.Text>
                      Web Development Career, Courses, Scopes.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 8 */}
              <Col md={4}>
                <Card className="card-box">
                  <Card.Img variant="top" src={card15} />
                  <Card.Body>
                    <Card.Title>Web Development Cource</Card.Title>
                    <Card.Text>
                      Build responsive web applications that work seamlessly on any device.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Webdevelopment
