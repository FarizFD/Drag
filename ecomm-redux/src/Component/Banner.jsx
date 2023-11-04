import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
const Banner = () => {
    return (
        <Container>
            <Row className='justify-content-center align-item-center'>
                <Col lg={8}>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <Image
                                className='d-block w-100'
                                src={require('../assets/pizza1.jpg')}>

                            </Image>
                            <Carousel.Caption>
                                <h3>Cheese Pizza</h3>
                                <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image
                                className='d-block w-100'
                                src={require('../assets/pizza2.jpg')}>

                            </Image>
                            <Carousel.Caption>
                                <h3>Chicken Pizza</h3>
                                <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image
                                className='d-block w-100'
                                src={require('../assets/pizza3.jpg')}>

                            </Image>
                            <Carousel.Caption>
                                <h3>Vegg Pizza</h3>
                                <p className='d-none d-sm-block'>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div>
                <h2 className='display-5 mt-3'>Pizza for every Occasion!!</h2>
                <p className='lead text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>

        </Container>
    )
}

export default Banner