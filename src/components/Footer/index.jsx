import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

function Footer(props) {
    return (
        <MDBContainer fluid >
            <MDBRow className="py-3">
                <MDBCol><p className="m-0">Copyright © 2021 Nguyen Tan Duc. All Rights Reserved.</p></MDBCol>
                <MDBCol className="text-end"><p className="m-0">Web Developer</p></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Footer;