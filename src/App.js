import React from 'react';
import { Dropdown, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing images
import card1 from './assets/images/card1.jpg';
import card2 from './assets/images/card2.jpg';
import card3 from './assets/images/card3.jpg';
import card4 from './assets/images/card4.jpg';
import card5 from './assets/images/card5.jpg';
import card6 from './assets/images/card6.jpg';

const App = () => {
  return (
    <div className="container">
      {/* Category Dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-category">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#action/3.1">Cyber Security</Dropdown.Item>
          <Dropdown.Item href="#action/3.2">Web Development</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Cards Section */}
      <div className="card-grid mt-4">
        <Row>
          {/* Card 1 */}
          <Col md={4}>
            <Card className="card-box">
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Anywhere Access</Card.Title>
                <Card.Text>
                  Access all over Mumbai. Get access to any cult pro gyms all across Mumbai.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4}>
            <Card className="card-box">
              <Card.Img variant="top" src={card2} />
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
              <Card.Img variant="top" src={card3} />
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
        <Row>
          {/* Card 4 */}
          <Col md={4}>
            <Card className="card-box">
              <Card.Img variant="top" src={card4} />
              <Card.Body>
                <Card.Title>Next Gen Security</Card.Title>
                <Card.Text>
                  Experience cutting-edge cybersecurity solutions tailored to your needs.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 */}
          <Col md={4}>
            <Card className="card-box">
              <Card.Img variant="top" src={card5} />
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
              <Card.Img variant="top" src={card6} />
              <Card.Body>
                <Card.Title>Cyber Solutions</Card.Title>
                <Card.Text>
                  Secure your online presence with advanced cyber solutions.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
