import React from 'react';
import '../styles/document-details.css';
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Form, ListGroup} from 'react-bootstrap';
import documentData from '../assets/data/documents';

const DocumentDetails = () => {
    const {id} = useParams();
    const document = documentData.find(document => document.id === id);
    console.log(document.title);
    const {title, subject, desc, reviews, avgRating, doc, featured} = document;
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                    <embed src={doc} type="application/pdf" width="100%" height="600px"></embed>
                        <div className = "document-details">
                            <h1>{title}</h1>
                            <div className= 'de-flex align-items-center gap -5'>
                                <span className='d-flex align-items-center gap-1'></span>
                                <i class="ri-book-2-fill"></i>{subject}
                            </div>
                            <p>{desc}</p>
                        </div>

                        

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DocumentDetails;