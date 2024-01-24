import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import SideBarComponent from '../components/SideBarComponent';
import MainHPComponent from '../components/MainHPComponent';
import NavBottomComponent from '../components/NavBottomComponent';
import { setSearchResults } from '../actions/actions';
import axios from 'axios';
import { Helmet } from 'react-helmet'

const HomePage = ({ setSearchResults }) => {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'
        );

        if (response.data && response.data.data) {
          console.log(response.data)
          setSearchResults(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setSearchResults]);

  return (
    <>
    <Helmet>
        <title>Spotify</title>
      </Helmet>
      <Container fluid>
        <Row>
          <SideBarComponent />
          <MainHPComponent />
        </Row>
      </Container>

      <Container fluid className='fixed-bottom bg-container pt-1'>
        <Row>
          <NavBottomComponent />
        </Row>
      </Container>
    </>
  );
};

const mapDispatchToProps = {
  setSearchResults,
};

export default connect(null, mapDispatchToProps)(HomePage);
