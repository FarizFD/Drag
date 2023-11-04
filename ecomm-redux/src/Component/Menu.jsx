import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PizzaCard from './PizzaCard'
const Menu = () => {
    const menuArray = [1, 2, 3, 4, 5, 6]
    return (
        <section id='menu' className='bg-light'>
            <Container>
                <div className='my-3 py-5'>
                    <h3 className='text-danger'><span>Treat Yourself with Our Everyday Menu  <i className="bi bi-activity"></i></span></h3>
                </div>
            </Container>
            <div>
                <Row>
                    {menuArray.map((item) => {
                        return (
                            <Col md={6} lg={4} key={item}>
                                <PizzaCard />
                            </Col>
                        )
                    })}

                </Row>
            </div>
        </section>
    )
}

export default Menu