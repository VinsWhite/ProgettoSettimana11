import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import SideBarComponent from '../components/SideBarComponent';
import NavBottomComponent from '../components/NavBottomComponent';
import { setSearchResults } from '../actions/actions';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AlbumPage = ({ setSearchResults }) => {

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=your_query_here'
        );

        if (response.data && response.data.data) {
          setSearchResults(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, setSearchResults]);

  return (
    <>
      <Container fluid>
        <Row>
          <SideBarComponent />
          {/* <MainHPComponent /> */}
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

const mapStateToProps = (state) => {
  return {
    albumDetails: state.albumDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
