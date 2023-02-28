import React, { Component } from 'react';
import '../styles/home.css'
import {Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/imgpc.jpg'
import heroImg02 from '../assets/images/img2.png'
import heroImg03 from '../assets/images/img3.jpg'
import Subtitle from '../shared/Subtitle'
import BookIMG from '../assets/images/book.png'
import SearchBar from '../shared/SearchBar';
import FeaturedDocumentList from '../components/Featured-documents/FeaturedDocumentsList';
class Home extends Component {
    render() {
        return <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='hero__content'>
                            <div className='hero__subtitle d-flex align-items-center'>
                                
                                <img src ={BookIMG} alt=""></img>
                            </div>
                            <h1>"La educación es el arma más poderosa que puedes usar para cambiar el mundo." - <span className= "highlight">Nelson Mandela</span></h1>
                            
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box'>
                            <img src={heroImg} alt=""></img>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-4'>
                            <img src={heroImg03} alt="" ></img>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-5'>
                            <img src={heroImg02} alt=""></img>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/**========================== featured document section start=================== */}
        <section>
            <Container>
                <Row>
                    <Col lg = "12" className='mb-5'>
                    <Subtitle  subtitle={"Explore"}/>
                    <h2 className='featured__document-title'>Our featured documents</h2>
                    </Col>
                    <FeaturedDocumentList></FeaturedDocumentList>
                </Row>
            </Container>
        </section>
        {/**========================== featured document section end=================== */}
        </>
    }
}

export default Home;