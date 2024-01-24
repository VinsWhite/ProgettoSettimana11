import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {

  return (
    <>
      <Helmet>
        <title>Pagina non trovata</title>
      </Helmet>
      <Container className='notfoundpageStyle text-center'>
        <img src={require('../playerButton/icon.png')} alt="" />
        <h1 className='text-light fw-bold'>Pagina non trovata</h1>
        <p className='text-secondary'>Non riusciamo a trovare la pagina che cerchi</p>
        <Link className='light rounded-5 px-4 my-3 btn bg-light' to={'/'}>Home</Link>
        <a className='d-block text-light fw-bold mt-3' href="https://support.spotify.com/it/">Assistenza</a>
      </Container>
    </>
  );
}
