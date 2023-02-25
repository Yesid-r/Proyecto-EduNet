import React, {  useRef } from 'react';
import './search-bar.css'
import {Col, Form, FormGroup} from "reactstrap"

const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

        return (
        <Col lg="12">
        <div className = "search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span ><i class="ri-book-2-fill"></i> </span>
                    <div>
                        <h6>Subject</h6>
                        <input type = "text" placeholder='wich subject you want?'></input>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span ><i class="ri-draft-line"></i> </span>
                    <div>
                        <h6>Document</h6>
                        <input type = "number" placeholder='tipo de documento'></input>
                    </div>
                </FormGroup>
                <span className="search__icon" type="submit">
                <i class="ri-search-line"></i>
                </span>
            </Form>

        </div>
        </Col>
        );
};
export default SearchBar;