import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row , Col } from 'reactstrap';
import SearchBar from '../shared/SearchBar';
import DocumentCard from '../shared/DocumentCard';
import documentData from '../assets/data/documents';

import '../styles/document.css'

const Documents = () => {
    console.log('ingreso a documentos:')
    const[pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect (()=>{
        const pages = Math.ceil(5/4) ;
        setPageCount(pages);
    },[page])
    return (
        <>
        
            <CommonSection title="all documents"/>
            <section >
                <Container>
                    <Row>
                        <SearchBar/>
                    </Row>
                </Container>
            </section>
            <section >
                <Container>
                    <Row>{
                        documentData ?.map(document => <Col lg='3' className='mb.4' key={document.id}>
                            
                        <DocumentCard document={document}/> 
                        </Col>)
                        }
                        
                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap3">
                                {
                                    [...Array(pageCount).keys()].map(number =>(
                                        <span key={number} onClick={() => setPage(number)} className={page=== number ? 'active__page': ''}>
                                            {number + 1}
                                        </span>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </section>
            </>  
    );
};

export default Documents;