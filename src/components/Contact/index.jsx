import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

function Contact(props) {
    return (
        <MDBContainer>
            <MDBRow className="px-4 py-5 text-center">
                <h1>Contact</h1>
            </MDBRow>
            <MDBRow className="px-4">
                <MDBCol md="4" className="pe-4">
                    <p className="py-3 m-0">Phone: +84903330994</p>
                    <hr className="m-0" />
                    <p className="py-3 m-0">Email: ntanduc94@gmail.com</p>
                    <hr className="m-0" />
                    <p className="py-3 m-0">Follow me:
                        <a href="#">fb</a>
                        <a href="#">ln</a>
                        <a href="#">github</a>
                    </p>
                </MDBCol>
                <MDBCol md="8">
                    <form>
                        <MDBRow className="mb-3">
                            <MDBCol className="p-0 pe-1"><input className="form-control" placeholder="Name" /></MDBCol>
                            <MDBCol className="p-0 ps-1"><input className="form-control" type="text" name="email" placeholder="Email" /></MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <textarea className="form-control" name="description" placeholder="Tell me more about your needs..." rows="10" /></MDBRow>
                        <MDBRow className='mt-3'>
                            <MDBBtn>Send Message</MDBBtn>
                        </MDBRow>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Contact;