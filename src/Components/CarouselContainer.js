import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/1.jpeg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'

const CarouselContainer = () => {
    return (<Carousel>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                height="450px"
            />
            <Carousel.Caption>
                <h1 className="bg-primary">Key to your house..</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100 "
                src={image2}
                alt="Second slide"
                height="450px"
            />
            <Carousel.Caption>
                <h1 className="bg-warning">Get Ready to create tons of memories in your new place.</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100 "
                src={image3}
                alt="Third slide"
                height="450px"
            />
            <Carousel.Caption>
                <h1 className="bg-success">This is your land of dreams!!</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src={image4}
                alt="First slide"
                height="450px"
            />
            <Carousel.Caption>
                <h1 className="bg-danger">Buying a house is a lot of hard work but "We make it easier for you."</h1>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}


export default CarouselContainer;
