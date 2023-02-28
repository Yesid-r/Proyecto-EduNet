import React from 'react';
import DocumentCard from '../../shared/DocumentCard';
import documentData from '../../assets/data/documents'
import { Col } from 'reactstrap'; 

const FeaturedDocumentList = () => {
    return (
        <>
            {
                documentData ?.map(document=>(
                    <Col lg='3' className='mb-4' key={document.id}>
                        <DocumentCard document ={document}></DocumentCard>
                    </Col>
                ))
            }
        </>
    );
};

export default FeaturedDocumentList;