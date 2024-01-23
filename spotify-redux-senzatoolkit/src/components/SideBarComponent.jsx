import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Col, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HouseFill, BookFill } from 'react-bootstrap-icons';
import { setSearchResults } from '../actions/actions'; // Assicurati di importare l'azione corretta
import axios from 'axios';

const SideBarComponent = ({ setSearchResults }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      );

      if (response.data && response.data.data) {
        setSearchResults(response.data.data); // Aggiorna lo stato globale con i risultati della ricerca
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Col xs={2}>
      <Nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id='sidebar'>
        <div className="nav-container">
          <Navbar.Brand className='navbar-brand'>
            <Link to="/">
              <img
                src={require('../playerButton/Spotify_Logo.png')}
                alt="Spotify_Logo"
                width="131"
                height="40"
                className='m-3'
              />
            </Link>
          </Navbar.Brand>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link">
                    <Link to={'/'} className='nav-link'>
                      <HouseFill size={20} className='me-2' />
                      &nbsp;Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link">
                    <Link to={'/'} className='nav-link'>
                      <BookFill size={20} className='me-2' />
                      &nbsp;Your Library
                    </Link>
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div
                      className="input-group-append"
                      style={{ marginBottom: "4%" }}
                    >
                      <Button
                        className="btn btn-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                        onClick={handleSearch}
                      >
                        GO
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <Button variant='light' className='signup-btn rounded-5'>Sign Up</Button>
          <Button variant='dark' className='login-btn rounded-5'>Login</Button>
          <a href="#">Cookie Policy</a> |
          <a href="#"> Privacy</a>
        </div>
      </Nav>
    </Col>
  );
};

const mapDispatchToProps = {
  setSearchResults,
};

export default connect(null, mapDispatchToProps)(SideBarComponent);
