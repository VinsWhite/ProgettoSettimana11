import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideBarComponent from '../components/SideBarComponent'
import NavBottomComponent from '../components/NavBottomComponent'

export default function ArtistPage() {
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
  )
}
