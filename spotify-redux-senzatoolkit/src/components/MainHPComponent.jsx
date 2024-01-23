import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Heart } from 'react-bootstrap-icons';

const MainHPComponent = ({ searchResults }) => {
  return (
    <Container className="mt-3">
      {/* Rock Classics Section */}
      <Row>
        <Col>
          <h2>Rock Classics</h2>
          <Row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4>
            {generateCards(searchResults, 'rock')}
          </Row>
        </Col>
      </Row>

      {/* Pop Culture Section */}
      <Row className="mt-3">
        <Col>
          <h2>Pop Culture</h2>
          <Row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4>
            {generateCards(searchResults, 'pop')}
          </Row>
        </Col>
      </Row>

      {/* Hip Hop Section */}
      <Row className="mt-3">
        <Col>
          <h2>#HipHop</h2>
          <Row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4>
            {generateCards(searchResults, 'hiphop')}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

// Funzione per generare le cards
const generateCards = (items, category) => {
  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(category.toLowerCase());
  });

  return filteredItems.map((item) => (
    <Col key={item.id} className="mb-3">
      <Card style={{width: '10rem'}}>
        <Card.Img variant="top" src={item.album.cover_medium} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text><Heart className='me-1'/>{item.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default connect(mapStateToProps)(MainHPComponent);
